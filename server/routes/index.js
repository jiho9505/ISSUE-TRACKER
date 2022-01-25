import { Router } from 'express';

import UserRouter from './users.js';

const ApiRouter = Router();

ApiRouter.use('/users', UserRouter);

export default ApiRouter;
