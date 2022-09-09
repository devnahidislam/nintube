import jwt from "jsonwebtoken"
import { createError } from "./error.js"

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    // Error don't work properly
    return next(createError(401, "You are not Loged In."));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(createError(403, "Invalid Token.!"));
    req.user = user;

    next();
  })
};

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;

  if (token) {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return next(createError(403, "You are not authenticated..."));
        // console.log(req.user.id === req.params.id);
      }
    })
  } else {
    return next(createError(401, "You are not Loged In. User"));
  }
}
export const verifyAdmin = (req, res, next) => {
  const token = req.cookies.access_token;

  if (token) {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id && req.user.isAdmin) {
        next();
      } else {
        return next(createError(403, "You are not User / Admin"));
      }
    })
  } else {
    return next(createError(401, "You are not Loged In. User"));
  }
}