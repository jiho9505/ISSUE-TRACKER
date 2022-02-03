import jwt from 'jsonwebtoken';

import { User } from '../models/User.js';

const JWT_KEY = 'secret';
const ACCESS_TOKEN_EXPIRE = '1h';
const REFRESH_TOKEN_EXPIRE = '14d';

export const createJWT = async (_id) => {
  const accessToken = jwt.sign({ _id }, JWT_KEY, { expiresIn: ACCESS_TOKEN_EXPIRE });
  const refreshToken = jwt.sign({ _id }, JWT_KEY, { expiresIn: REFRESH_TOKEN_EXPIRE });
  await User.findOneAndUpdate({ _id }, { refreshToken });
  return [accessToken, refreshToken];
};
