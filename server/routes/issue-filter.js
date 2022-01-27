import express from 'express';

import { IssueFilterController } from '../controllers/IssueFilterController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth.checkLogin, IssueFilterController.getFilters);
router.post('/', auth.checkLogin, IssueFilterController.createFilter);

export default router;
