import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { isValidEmail, isValidPhoneNumber } from "../helpers/helpers.js";

const tokenVerify = (req, res, next) => {
  // const authHeader = req.headers.authorization || req.headers.Authorization;

  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(400).json({ message: "Unauthorized" });
  }

  jwt.verify(
    accessToken,
    process.env.ACCESS_TOKEN_SECRET,
    asyncHandler(async (err, decode) => {
      if (err) {
        return res.status(400).json({ message: "Invalid Token" });
      }

      let me = null;
      if (isValidEmail(decode.auth)) {
        me = await User.findOne({ email: decode.auth }).select("-password");
      } else if (isValidPhoneNumber(decode.auth)) {
        me = await User.findOne({ phone: decode.auth }).select("-password");
      }
      req.me = me;
      next();
    })
  );
};

export default tokenVerify;
