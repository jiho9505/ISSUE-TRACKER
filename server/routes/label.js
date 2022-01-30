import express from 'express';

import { LabelController } from './../controllers/LabelController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth.checkLogin, LabelController.getLabels);
router.get('/length', auth.checkLogin, LabelController.getLength);
router.post('/', auth.checkLogin, LabelController.createLabel);
router.put('/', auth.checkLogin, LabelController.updateLabel);
router.delete('/', auth.checkLogin, LabelController.deleteLabel);

export default router;
