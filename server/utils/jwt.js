import jwt from 'jsonwebtoken';

import { User } from '../models/User.js';

export const createJWT = async (_id) => {
  const accessToken = jwt.sign({ _id }, 'secret', { expiresIn: '1h' });
  const refreshToken = jwt.sign({ _id }, 'secret', { expiresIn: '14d' });
  await User.findOneAndUpdate({ _id }, { refreshToken });
  return [accessToken, refreshToken];
};
