import { error } from '../errors';

const checkLogin = (req, res, next) => {
  try {
    const token = req.cookies.w_auth;
    if (!token) throw new Error(error.NOT_LOGIN_ERROR);
    jwt.verify(token, 'secret', (err) => {
      if (err) throw new Error(error.JWT_TOKEN_INVALID_ERROR);
      req.id = token;
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
