import express from 'express';

import { IssueController } from '../controllers/IssueController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth.checkLogin, IssueController.getIssues);
router.get('/length', auth.checkLogin, IssueController.getIssueLength);
// router.get('/detail', auth.checkLogin, IssueController.getDetail);
router.post('/image', auth.checkLogin, IssueController.createImage);
router.post('/', auth.checkLogin, IssueController.createIssue);
// router.patch('/', auth.checkLogin, IssueController.updateIssue);
// router.delete('/', auth.checkLogin, IssueController.deleteIssue);

export default router;
