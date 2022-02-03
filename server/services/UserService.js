import bcrypt from 'bcrypt';
import axios from 'axios';

import { User } from '../models/User.js';

import { error } from '../errors/index.js';
import { createJWT } from '../utils/jwt.js';

const github = async (code) => {
  let _id = '';

  const githubAccessToken = await getGithubUserAccessToken(code);
  const githubInfo = await getUserGithubInfo(githubAccessToken);

  const userId = githubInfo.login + ':git';
  const user = await User.findOne({ id: userId });

  if (!user) {
    const avatar = githubInfo.avatar_url;
    const name = githubInfo.name;
    const newUser = new User({ id: userId, name, password: '--github--', avatar });
    await newUser.save();
    _id = newUser._id;
  }
  if (user) _id = user._id;

  const [accessToken, refreshToken] = await createJWT(_id);
  return [accessToken, refreshToken];
};

const getUserGithubInfo = async (token) => {
  const { data } = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return data;
};

const getGithubUserAccessToken = async (code) => {
  const client_id = process.env.OAUTH_ID;
  const client_secret = process.env.OAUTH_SECRET;

  const { data } = await axios.post(
    'https://github.com/login/oauth/access_token',
    { code, client_id, client_secret },
    { headers: { accept: 'application/json' } }
  );

  const token = data.access_token;
  return token;
};

const getUserImage = async (_id) => {
  const user = await User.findOne({ _id });
  const userImage = user.avatar;
  return userImage;
};

const login = async (id, password) => {
  const user = await User.findOne({ id });
  if (!user) throw new Error(error.INCORRECT_ID_ERROR);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error(error.INCORRECT_PWD_ERROR);

  const [accessToken, refreshToken] = await createJWT(user._id);
  return [accessToken, refreshToken];
};

const DEFAULT_AVATAR = 'https://issue-tracker-2022.s3.ap-northeast-2.amazonaws.com/imgs/user.png';

const registerUser = async (data) => {
  const userInfo = await User.findOne({ id: data.id });
  if (userInfo) throw new Error(error.CHECK_ID_ERROR);
  const body = { ...data, name: data.id, avatar: DEFAULT_AVATAR };
  const user = new User(body);
  await user.save();
};

const logout = async (req, res) => {
  const _id = req._id;
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  await User.findOneAndUpdate({ _id }, { refreshToken: '' });
};

export const UserService = { github, logout, registerUser, login, getUserImage };
