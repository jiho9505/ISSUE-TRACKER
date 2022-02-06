import multer from 'multer';
import multerS3 from 'multer-s3';
import AWS from 'aws-sdk';

import { Issue } from '../models/Issue.js';
import { Comment } from '../models/Comment.js';
import { Assignee } from '../models/Assignee.js';
import { IssueLabel } from '../models/IssueLabel.js';

/**
 * @filter
 * 0: 내가 작성한 이슈
 * 1: 나에게 할당된 이슈
 * 2: 내가 댓글을 남긴 이슈
 */
const getIssues = async (status, filter, writer, page) => {
  const LIMIT = 5;
  const isOpenBody = status === 'open' ? { isOpen: true } : { isOpen: false };
  const result = [];

  const pushCoreContent = (issue, assignees, issueLabels) => {
    const issueResult = {
      _id: issue._id,
      title: issue.title,
      isOpen: issue.isOpen,
      writerName: issue.writer.name,
    };
    const assigneeResult = assignees.map((assignee) => ({
      avatar: assignee.userId.avatar,
    }));
    const issueLabelResult = issueLabels.map((issueLabel) => ({
      name: issueLabel.labelId.name,
      bgColor: issueLabel.labelId.bgColor,
      textColor: issueLabel.labelId.textColor,
    }));

    result.push({
      issue: issueResult,
      assignees: assigneeResult,
      labels: issueLabelResult,
    });
  };

  const queryExec = async (issueId, mode = '') => {
    if (mode === 'all') {
      const [issue, assignees, issueLabels] = await Promise.all([
        Issue.findOne({ _id: issueId, ...isOpenBody }).populate('writer'),
        Assignee.find({ issueId }).populate('userId'),
        IssueLabel.find({ issueId }).populate('labelId'),
      ]);
      return [issue, assignees, issueLabels];
    }
    const [assignees, issueLabels] = await Promise.all([
      Assignee.find({ issueId }).populate('userId'),
      IssueLabel.find({ issueId }).populate('labelId'),
    ]);
    return [assignees, issueLabels];
  };

  switch (filter) {
    case '0':
      const issuesAuthorMe = await Issue.find({ writer, ...isOpenBody })
        .populate('writer')
        .sort({ createdAt: -1 })
        .skip(page * LIMIT)
        .limit(LIMIT);

      await Promise.all(
        issuesAuthorMe.map(async (issue) => {
          const [assignees, issueLabels] = await queryExec(issue._id);
          pushCoreContent(issue, assignees, issueLabels);
        })
      );
      break;
    case '1':
      const assigneeArr = await Assignee.find({ userId: writer })
        .sort({ createdAt: -1 })
        .skip(page * LIMIT)
        .limit(LIMIT);

      await Promise.all(
        assigneeArr.map(async (assignee) => {
          const issueId = assignee.issueId;
          const [issue, assignees, issueLabels] = await queryExec(issueId, 'all');
          pushCoreContent(issue, assignees, issueLabels);
        })
      );
      break;
    case '2':
      const issueIdArr = await Comment.find({ writer }).distinct('issueId');
      const organizedIssueIdArr = issueIdArr.reverse().slice(page * LIMIT, LIMIT);

      await Promise.all(
        organizedIssueIdArr.map(async (issueId) => {
          const [issue, assignees, issueLabels] = await queryExec(issueId, 'all');
          pushCoreContent(issue, assignees, issueLabels);
        })
      );
      break;
    default:
      const issues = await Issue.find(isOpenBody)
        .populate('writer')
        .sort({ createdAt: -1 })
        .skip(page * LIMIT)
        .limit(LIMIT);

      await Promise.all(
        issues.map(async (issue) => {
          const [assignees, issueLabels] = await queryExec(issue._id);
          pushCoreContent(issue, assignees, issueLabels);
        })
      );
      break;
  }

  return result;
};

/**
 * @filter
 * 0: 내가 작성한 이슈
 * 1: 나에게 할당된 이슈
 * 2: 내가 댓글을 남긴 이슈
 */
const getIssueLength = async (filter, writer) => {
  const isOpenBody = { isOpen: true };
  const result = [];

  switch (filter) {
    case '0':
      const [totalIssuesAuthorMe, openIssuesAuthorMe] = await Promise.all([
        Issue.find({ writer }),
        Issue.find({ writer, ...isOpenBody }),
      ]);
      const closeIssuesAuthorMeLength = totalIssuesAuthorMe.length - openIssuesAuthorMe.length;
      result.push({
        openIssueLength: openIssuesAuthorMe.length,
        closeIssueLength: closeIssuesAuthorMeLength,
      });
      break;
    case '1':
      const assigneeArr = await Assignee.find({ userId: writer }).populate('issueId');
      let openIssuesAssigneeMeLength = 0;
      assigneeArr.forEach((assignee) => {
        if (assignee.issueId.isOpen) openIssuesAssigneeMeLength += 1;
      });
      const totalIssuesAssigneeMeLength = assigneeArr.length;
      const closeIssuesAssigneeMeLength = totalIssuesAssigneeMeLength - openIssuesAssigneeMeLength;
      result.push({
        openIssueLength: openIssuesAssigneeMeLength,
        closeIssueLength: closeIssuesAssigneeMeLength,
      });
      break;
    case '2':
      const issueIdArr = await Comment.find({ writer }).distinct('issueId');
      let openIssuesCommentMeLength = 0;

      await Promise.all(
        issueIdArr.map(async (issueId) => {
          const openIssue = await Issue.find({ _id: issueId, ...isOpenBody });
          openIssuesCommentMeLength += openIssue.length;
        })
      );

      const totalIssuesCommentMeLength = issueIdArr.length;
      const closeIssuesCommentMeLength = totalIssuesCommentMeLength - openIssuesCommentMeLength;
      result.push({
        openIssueLength: openIssuesCommentMeLength,
        closeIssueLength: closeIssuesCommentMeLength,
      });

      break;
    default:
      const [issues, openIssues] = await Promise.all([Issue.find({}), Issue.find(isOpenBody)]);
      const closeIssueLength = issues.length - openIssues.length;
      result.push({
        openIssueLength: openIssues.length,
        closeIssueLength,
      });
      break;
  }

  return result;
};

const createIssue = async (body, writer) => {
  const arr = ['-'];
  const issueBody = { writer, title: body.title };
  const issue = new Issue(issueBody);
  const issueId = issue._id;
  const commentBody = { ...body.comment, writer, issueId };
  const assignees = body.assignees;
  const issueLabels = body.labels;

  const assigneePromise = assignees.map((userId) => {
    const assignee = new Assignee({ userId, issueId });
    assignee.save();
  });
  const issueLabelPromise = issueLabels.map((labelId) => {
    const issueLabel = new IssueLabel({ labelId, issueId });
    issueLabel.save();
  });
  const commentPromise = arr.map(() => {
    const comment = new Comment(commentBody);
    comment.save();
  });

  await Promise.all([...assigneePromise, ...issueLabelPromise, ...commentPromise, issue.save()]);
};

// const getDetail = async (issueId) => {
//   const [issue, comments, assignees, issueLabels] = await Promise.all([
//     Issue.findOne({ _id: issueId }).populate('writer'),
//     Comment.find({ issueId }).populate('writer'),
//     Assignee.find({ issueId }).populate('userId'),
//     IssueLabel.find({ issueId }).populate('labelId'),
//   ]);
//   console.log(issue, comments, assignees, issueLabels);
//   return result;
// };

// const createImage = async () => {
//   const s3 = new AWS.S3({
//     accessKeyId: config.accessKeyId,
//     secretAccessKey: config.secretAccessKey,
//     region: config.region,
//   });

//   const storage = multerS3({
//     s3: s3,
//     bucket: 'fgd-storeimage',
//     contentType: multerS3.AUTO_CONTENT_TYPE,
//     acl: 'public-read',
//     metadata: function (req, file, cb) {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function (req, file, cb) {
//       cb(null, `storeImages/${Date.now()}_${file.originalname}`);
//     },
//   });

//   const upload = multer({ storage }).single('file');
//   return upload;
// };

// const updateIssue = async (body, content) => {
//   try {
//     await Board.findOneAndUpdate(body, content);
//     return;
//   } catch (e) {
//     throw e;
//   }
// };

// const deleteIssue = async (boardId) => {
//   try {
//     await Promise.all([Board.findOneAndDelete({ _id: boardId }), Comment.deleteMany({ boardId })]);
//     return;
//   } catch (e) {
//     throw e;
//   }
// };

export const IssueService = {
  getIssues,
  getIssueLength,
  createIssue,
  // getDetail,
  // createImage,
  // updateIssue,
  // deleteIssue,
};
