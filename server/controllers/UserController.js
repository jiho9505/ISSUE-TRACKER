import { UserService } from './../services/UserService.js';
import { error } from '../errors/index.js';

const auth = (req, res) => {
  return res.json({ success: true });
};

const github = async (req, res) => {
  try {
    const code = req.body.authorizationCode;
    const [accessToken, refreshToken] = await UserService.github(code);
    return res
      .cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      })
      .cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      })
      .json({
        success: true,
      });
  } catch (e) {
    return res.json({ success: false, message: error.COMMON_ERROR });
  }
};

const getUserImage = async (req, res) => {
  try {
    const _id = req._id;
    const result = await UserService.getUserImage(_id);
    return res.json({ success: true, result });
  } catch (e) {
    return res.json({ success: false, message: error.COMMON_ERROR });
  }
};

const login = async (req, res) => {
  try {
    const { id, password } = req.body;
    const [accessToken, refreshToken] = await UserService.login(id, password);

    return res
      .cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      })
      .cookie('refreshToken', refreshToken, {
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
    UserService.logout(req, res);
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, message: error.LOGOUT_ERROR });
  }
};

export const UserController = { logout, registerUser, github, login, getUserImage, auth };
