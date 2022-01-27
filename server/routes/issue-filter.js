import express from 'express';

import { IssueFliterController } from './../controllers/IssueFliterController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth.checkLogin, IssueFliterController.getFliters);

export default router;
