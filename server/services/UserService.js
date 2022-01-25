import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { error } from '../errors/index.js';

const login = async (id, password) => {
  try {
    const user = await User.findOne({ id });
    if (!user) throw new Error(error.INCORRECT_ID_ERROR);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error(error.INCORRECT_PWD_ERROR);

    const token = jwt.sign({ _id: user._id }, 'secret', { expiresIn: '1d' });
    return token;
  } catch (e) {
    throw e;
  }
};

const registerUser = async (data) => {
  try {
    const userInfo = await User.findOne({ id: data.id });
    if (userInfo) throw new Error(error.CHECK_ID_ERROR);
    const user = new User(data);
    await user.save();
  } catch (e) {
    throw e;
  }
};

const logout = (res) => {
  res.clearCookie('w_auth');
};

export const UserService = { logout, registerUser, login };
