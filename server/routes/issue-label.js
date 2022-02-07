import express from 'express';

import { IssueLabelController } from '../controllers/IssueLabelController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth.checkLogin, IssueLabelController.getIssueLabels);
router.post('/', auth.checkLogin, IssueLabelController.createIssueLabel);
router.delete('/', auth.checkLogin, IssueLabelController.deleteIssueLabel);

export default router;
