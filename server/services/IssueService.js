import multer from 'multer';
import multerS3 from 'multer-s3';
import AWS from 'aws-sdk';

import { Issue } from '../models/Issue.js';
import { Comment } from '../models/Comment.js';
import { Assignee } from '../models/Assignee.js';
import { IssueLabel } from '../models/IssueLabel.js';

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

export const IssueService = {
  // getIssues,
  // getDetail,
  // createImage,
  createIssue,
  // updateIssue,
  // deleteIssue,
};
