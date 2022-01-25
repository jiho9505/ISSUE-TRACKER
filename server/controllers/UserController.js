import { error } from '../errors/index.js';
import { UserService } from './../services/UserService.js';

const login = async (req, res) => {
  try {
    const { id, password } = req.body;
    const token = await UserService.login(id, password);

    return res
      .cookie('w_auth', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      })
      .json({
        success: true,
      });
  } catch (e) {
    return res.json({ success: false, message: e.toString() });
  }
};

const registerUser = async (req, res) => {
  try {
    const data = req.body;
    await UserService.registerUser(data);
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, message: e.toString() });
  }
};

const logout = (req, res) => {
  try {
    UserService.logout(res);
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, message: error.LOGOUT_ERROR });
  }
};

export const UserController = { logout, registerUser, login };
