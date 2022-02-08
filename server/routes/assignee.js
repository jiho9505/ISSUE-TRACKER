import express from 'express';

import { AssigneeController } from '../controllers/AssigneeController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth.checkLogin, AssigneeController.getAssignees);
router.get('/about-issue', auth.checkLogin, AssigneeController.getIssueAssignees);
router.post('/', auth.checkLogin, AssigneeController.createAssignee);
router.delete('/', auth.checkLogin, AssigneeController.deleteAssignee);

export default router;
