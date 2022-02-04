import express from 'express';

import { UserController } from './../controllers/UserController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/logout', auth.checkLogin, UserController.logout);
router.get('/image', auth.checkLogin, UserController.getUserImage);
router.get('/auth', auth.checkLogin, UserController.auth);
router.get('/', auth.checkLogin, UserController.getUsers);
router.post('/github', UserController.github);
router.post('/register', UserController.registerUser);
router.post('/login', UserController.login);

export default router;
