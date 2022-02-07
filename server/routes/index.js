import { Router } from 'express';

import UserRouter from './users.js';
import LabelRouter from './label.js';
import IssueFilterRouter from './issue-filter.js';
import IssueRouter from './issue.js';
import IssueLabelRouter from './issue-label.js';
import AssigneeRouter from './assignee.js';
import CommentRouter from './comment.js';

const ApiRouter = Router();

ApiRouter.use('/users', UserRouter);
ApiRouter.use('/label', LabelRouter);
ApiRouter.use('/issue', IssueRouter);
ApiRouter.use('/issue-filter', IssueFilterRouter);
ApiRouter.use('/comment', CommentRouter);
ApiRouter.use('/issue-label', IssueLabelRouter);
ApiRouter.use('/assignee', AssigneeRouter);

export default ApiRouter;
