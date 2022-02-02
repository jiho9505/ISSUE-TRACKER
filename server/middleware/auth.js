import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { error } from '../errors/index.js';

const checkLogin = (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

    if (!accessToken) throw new Error();

    jwt.verify(accessToken, 'secret', async (err, accessDecode) => {
      try {
        if (err) {
          const { _id } = jwt.decode(accessToken);
          const user = await User.findOne({ _id });

          if (user.refreshToken !== refreshToken) throw new Error();
          jwt.verify(refreshToken, 'secret');

          req._id = _id;

          const newAccessToken = jwt.sign({ _id }, 'secret', { expiresIn: '1h' });
          res.cookie('accessToken', newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
          });
        }
        if (!err) req._id = accessDecode._id;
        next();
      } catch (e) {
        return res.json({
          success: false,
          message: error.NOT_LOGIN_ERROR,
        });
      }
    });
  } catch (e) {
    return res.json({
      success: false,
      message: error.NOT_LOGIN_ERROR,
    });
  }
};

export const auth = {
  checkLogin,
};
