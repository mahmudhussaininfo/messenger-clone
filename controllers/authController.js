import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import {
  createOtp,
  dotToHyphene,
  hypheneToDot,
  isValidEmail,
  isValidPhoneNumber,
} from "../helpers/helpers.js";
import { activatedEmail } from "../mails/accountActivateEmail.js";

/**
 * @DESC User Login
 * @ROUTE /api/v1/auth/login
 * @method POST
 * @access public
 */
export const login = asyncHandler(async (req, res) => {
  const { auth, password } = req.body;

  // validation
  if (!auth || !password)
    return res.status(404).json({ message: "All fields are required" });

  let loggedUser = null;

  //find login user
  if (isValidEmail(auth)) {
    loggedUser = await User.findOne({ email: auth });
  }

  //find user not found
  if (!loggedUser) {
    return res.status(404).json({ message: "user not found" });
  }

  // password check
  const passwordCheck = await bcrypt.compare(password, loggedUser.password);

  // password check
  if (!passwordCheck)
    return res.status(404).json({ message: "Wrong password" });

  // create access token
  const token = jwt.sign({ auth: auth }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN,
  });

  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: process.env.APP_ENV == "Development" ? false : true,
    sameSite: "strict",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    token,
    user: loggedUser,
    message: "User Login Successful",
  });
});

/**
 * @DESC User Login
 * @ROUTE /api/v1/auth/login
 * @method POST
 * @access public
 */
export const logout = asyncHandler(async (req, res) => {
  res.clearCookie("accessToken");
  res.status(200).json({ message: "Logout successful" });
});

/**
 * @DESC Create new User
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */
export const register = asyncHandler(async (req, res) => {
  const { name, auth, password } = req.body;

  if (!name || !auth || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //otp for activation code
  const activateCode = createOtp();

  let authEmail = null;
  let authPhone = null;

  if (isValidEmail(auth)) {
    authEmail = auth;
    //existing email check
    const emailCheck = await User.findOne({ email: auth });
    if (emailCheck) {
      return res.status(400).json({ message: "Email Already exists" });
    }

    // create access token
    const verifyToken = jwt.sign(
      { email: auth, otp: activateCode },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );

    res.cookie("verifyToken", verifyToken);

    //activation link
    const activeLink = `http://localhost:3000/activation/${dotToHyphene(
      verifyToken
    )}`;

    await activatedEmail(auth, {
      name,
      code: activateCode,
      link: activeLink,
    });
  } else if (isValidPhoneNumber(auth)) {
    authPhone = auth;

    //existing Phone check
    const phoneCheck = await User.findOne({ phone: auth });
    if (phoneCheck) {
      return res.status(400).json({ message: "Phone Already exists" });
    }
  } else {
    return res
      .status(400)
      .json({ message: "Please input your valid email or phone" });
  }

  // check user email
  // const userEmailCheck = await User.findOne({ email });

  // if (userEmailCheck) {
  //   return res.status(400).json({ message: "Email already exists" });
  // }

  // password hash
  const hashPass = await bcrypt.hash(password, 10);

  // create new user
  const user = await User.create({
    name,
    email: authEmail,
    phone: authPhone,
    password: hashPass,
    accessToken: activateCode,
  });

  res.status(200).json({
    user,
    message: "User Created successful",
  });
});

/**
 * @DESC Create new User
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */
export const loggedInUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.me);
});

/**
 * @DESC Create new User
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */
export const makeHashPass = asyncHandler(async (req, res) => {
  const { password } = req.body;
  // password hash
  const hashPass = await bcrypt.hash(password, 10);
  res.status(200).json({ hashPass });
});

/**
 * account activation by otp
 * @method POST
 * @access public
 */

export const accountActivationWithOtp = asyncHandler(async (req, res) => {
  const { token } = req.params;
  const { otp } = req.body;

  // token not found
  if (!token) {
    return res.status(400).json({
      message: "token not found",
    });
  }

  // token modify
  const tokenModify = hypheneToDot(token);

  // otp not found
  if (!otp) {
    return res.status(400).json({
      message: "otp not found",
    });
  }

  // veryfyToken
  const tokenCheck = jwt.verify(tokenModify, process.env.ACCESS_TOKEN_SECRET);

  // token not found
  if (!tokenCheck) {
    return res.status(400).json({
      message: "token not okay",
    });
  }

  //active account
  let activeUser = null;

  if (isValidEmail(tokenCheck.email)) {
    activeUser = await User.findOne({ email: tokenCheck.email });

    if (!activeUser) {
      return res.status(404).json({ message: "active user not found" });
    }
  } else {
    return res.status(404).json({ message: "auth is undefined" });
  }

  if (otp !== activeUser.accessToken) {
    return res.status(404).json({ message: "incorrect otp" });
  }

  activeUser.accessToken = null;
  activeUser.save();

  res.clearCookie("verifyToken");
  return res.status(200).json({ message: "active user successful" });
});

/**
 * account activation by link
 * @method POST
 * @access public
 */

export const accountActivationWithLink = asyncHandler(async (req, res) => {
  const { token } = req.params;

  // token not found
  if (!token) {
    return res.status(400).json({
      message: "token not found",
    });
  }

  // token modify
  const tokenModify = hypheneToDot(token);

  // veryfyToken
  const tokenCheck = jwt.verify(tokenModify, process.env.ACCESS_TOKEN_SECRET);

  // token not found
  if (!tokenCheck) {
    return res.status(400).json({
      message: "token not okay",
    });
  }

  //active account
  let activeUser = null;

  if (isValidEmail(tokenCheck.email)) {
    activeUser = await User.findOne({ email: tokenCheck.email });

    if (!activeUser) {
      return res.status(404).json({ message: "active user not found" });
    }
  } else {
    return res.status(404).json({ message: "auth is undefined" });
  }

  activeUser.accessToken = null;
  activeUser.save();

  res.clearCookie("verifyToken");
  return res.status(200).json({ message: "active user successful" });
});
