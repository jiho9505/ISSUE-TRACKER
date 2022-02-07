import express from 'express';

import { CommentController } from '../controllers/CommentController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth.checkLogin, CommentController.getComments);
router.post('/', auth.checkLogin, CommentController.createComment);
router.patch('/', auth.checkLogin, CommentController.updateComment);
router.delete('/', auth.checkLogin, CommentController.deleteComment);

export default router;
