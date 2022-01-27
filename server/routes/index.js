import { Router } from 'express';

import UserRouter from './users.js';
import LabelRouter from './label.js';
import IssueFliterRouter from './issue-filter';

const ApiRouter = Router();

ApiRouter.use('/users', UserRouter);
ApiRouter.use('/label', LabelRouter);
ApiRouter.use('/issue-filter', IssueFliterRouter);

export default ApiRouter;
