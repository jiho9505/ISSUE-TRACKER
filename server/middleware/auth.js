import { error } from '../errors/index.js';
import jwt from 'jsonwebtoken';

const checkLogin = (req, res, next) => {
  try {
    const token = req.cookies.w_auth;
    if (!token) throw new Error(error.NOT_LOGIN_ERROR);
    jwt.verify(token, 'secret', (err, decode) => {
      if (err) throw new Error(error.JWT_TOKEN_INVALID_ERROR);
      req._id = decode._id;
      next();
    });
  } catch (e) {
    return res.json({
      success: false,
      message: e.toString(),
    });
  }
};

export const auth = {
  checkLogin,
};
