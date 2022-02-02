import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { User } from '../models/User.js';

import { error } from '../errors/index.js';

const getFirstChar = async (_id) => {
  const user = await User.findOne({ _id });
  const userFirstChar = user.id[0];
  return userFirstChar;
};

const login = async (id, password) => {
  const user = await User.findOne({ id });
  if (!user) throw new Error(error.INCORRECT_ID_ERROR);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error(error.INCORRECT_PWD_ERROR);

  const accessToken = jwt.sign({ _id: user._id }, 'secret', { expiresIn: '1h' });
  const refreshToken = jwt.sign({ _id: user._id }, 'secret', { expiresIn: '14d' });

  await User.findOneAndUpdate({ id }, { refreshToken });
  return [accessToken, refreshToken];
};

const registerUser = async (data) => {
  const userInfo = await User.findOne({ id: data.id });
  if (userInfo) throw new Error(error.CHECK_ID_ERROR);
  const user = new User(data);
  await user.save();
};

const logout = async (req, res) => {
  const _id = req._id;
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  await User.findOneAndUpdate({ _id }, { refreshToken: '' });
};

export const UserService = { logout, registerUser, login, getFirstChar };
