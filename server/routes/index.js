import { Router } from 'express';

import UserRouter from './users.js';
import LabelRouter from './label.js';

const ApiRouter = Router();

ApiRouter.use('/users', UserRouter);
ApiRouter.use('/label', LabelRouter);

export default ApiRouter;
