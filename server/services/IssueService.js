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
    if (!issue) return;
    const issueResult = {
      _id: issue._id,
      title: issue.title,
      isOpen: issue.isOpen,
      createdAt: issue.createdAt,
      writerName: issue.writer.name,
    };
    const assigneeResult = assignees.map((assignee) => ({
      _id: assignee._id,
      avatar: assignee.userId.avatar,
    }));
    const issueLabelResult = issueLabels.map((issueLabel) => ({
      _id: issueLabel._id,
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

  const sortedResult = result.sort((a, b) => b.issue.createdAt - a.issue.createdAt);
  return sortedResult;
};

/**
 * @filter
 * 0: 내가 작성한 이슈
 * 1: 나에게 할당된 이슈
 * 2: 내가 댓글을 남긴 이슈
 */
const getIssueLength = async (filter, writer) => {
  const isOpenBody = { isOpen: true };
  let result = {};

  switch (filter) {
    case '0':
      const [totalIssuesAuthorMe, openIssuesAuthorMe] = await Promise.all([
        Issue.find({ writer }),
        Issue.find({ writer, ...isOpenBody }),
      ]);
      const closeIssuesAuthorMeLength = totalIssuesAuthorMe.length - openIssuesAuthorMe.length;
      result = {
        openIssueLength: openIssuesAuthorMe.length,
        closeIssueLength: closeIssuesAuthorMeLength,
      };
      break;
    case '1':
      const assigneeArr = await Assignee.find({ userId: writer }).populate('issueId');
      let openIssuesAssigneeMeLength = 0;
      assigneeArr.forEach((assignee) => {
        if (assignee.issueId.isOpen) openIssuesAssigneeMeLength += 1;
      });
      const totalIssuesAssigneeMeLength = assigneeArr.length;
      const closeIssuesAssigneeMeLength = totalIssuesAssigneeMeLength - openIssuesAssigneeMeLength;
      result = {
        openIssueLength: openIssuesAssigneeMeLength,
        closeIssueLength: closeIssuesAssigneeMeLength,
      };
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
      result = {
        openIssueLength: openIssuesCommentMeLength,
        closeIssueLength: closeIssuesCommentMeLength,
      };

      break;
    default:
      const [issues, openIssues] = await Promise.all([Issue.find({}), Issue.find(isOpenBody)]);
      const closeIssueLength = issues.length - openIssues.length;
      result = {
        openIssueLength: openIssues.length,
        closeIssueLength,
      };
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

const getDetail = async (issueId) => {
  const issue = await Issue.findOne({ _id: issueId }).populate('writer');
  const issueResult = {
    _id: issue._id,
    title: issue.title,
    isOpen: issue.isOpen,
    createdAt: issue.createdAt,
    writerName: issue.writer.name,
  };

  return issueResult;
};

const createImage = async () => {
  const s3 = new AWS.S3({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: process.env.region,
  });

  const storage = multerS3({
    s3: s3,
    bucket: 'issue-tracker',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, `imgs/${Date.now()}_${file.originalname}`);
    },
  });

  const upload = multer({ storage }).single('file');
  return upload;
};

const updateIssue = async (_id, body) => {
  await Issue.findOneAndUpdate({ _id }, body);
};

const deleteIssue = async (_id) => {
  await Promise.all([
    Issue.findOneAndDelete({ _id }),
    Comment.deleteMany({ issueId: _id }),
    IssueLabel.deleteMany({ issueId: _id }),
    Assignee.deleteMany({ issueId: _id }),
  ]);
};

export const IssueService = {
  getIssues,
  getIssueLength,
  createIssue,
  getDetail,
  createImage,
  updateIssue,
  deleteIssue,
};
