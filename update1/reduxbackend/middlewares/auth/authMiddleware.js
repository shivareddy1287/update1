// const expressAsyncHandler = require("express-async-handler");
const expressAsyncHandler = require("express-async-handler");

const jwt = require("jsonwebtoken");
const User = require("../../model/user/User");

const authMiddleware = expressAsyncHandler(async (req, res, next) => {
  let token;
  // console.log(req.headers);
  // console.log(req?.headers?.authorization?.startsWith("Bearer"));

  if (req?.headers?.authorization?.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      // console.log(token);
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        // find the user by id
        const user = await User.findById(decoded?.id).select("-password");
        // console.log(user, 123);
        // attach the user to the request object
        req.user = user;
        next();
      }
    } catch (error) {
      console.log(error);
      throw new Error("Not authorized token expired, login again");
    }
  } else {
    throw new Error("There is no token attached to the header");
  }
});

module.exports = authMiddleware;
