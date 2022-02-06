import { Router } from 'express';

import UserRouter from './users.js';
import LabelRouter from './label.js';
import IssueFilterRouter from './issue-filter.js';
import IssueRouter from './issue.js';

const ApiRouter = Router();

ApiRouter.use('/users', UserRouter);
ApiRouter.use('/label', LabelRouter);
ApiRouter.use('/issue', IssueRouter);
ApiRouter.use('/issue-filter', IssueFilterRouter);

export default ApiRouter;
