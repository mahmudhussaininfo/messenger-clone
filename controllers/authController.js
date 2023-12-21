import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import {
  createOtp,
  dotToHyphene,
  hypheneToDot,
  isValidEmail,
} from "../helpers/helpers.js";
import { activatedEmail } from "../mails/accountActivateEmail.js";

/**
 * @DESC User Login
 * @ROUTE /api/v1/auth/login
 * @method POST
 * @access public
 */
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // validation
  if (!email || !password)
    return res.status(404).json({ message: "All fields are required" });

  let loggedUser = null;

  //find login user
  if (isValidEmail(email)) {
    loggedUser = await User.findOne({ email });
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
  const token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
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
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //otp for activation code
  const activateCode = createOtp();

  let authEmail = null;

  if (isValidEmail(email)) {
    authEmail = email;
    //existing email check
    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.status(400).json({ message: "Email Already exists" });
    }

    // create access token
    const verifyToken = jwt.sign(
      { email, otp: activateCode },
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

    await activatedEmail(email, {
      name,
      code: activateCode,
      link: activeLink,
    });
  } else {
    return res.status(400).json({ message: "Please input your valid email" });
  }

  // password hash
  const hashPass = await bcrypt.hash(password, 10);

  // create new user
  const user = await User.create({
    name,
    email: authEmail,
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
    return res.status(404).json({ message: "heeehee auth is undefined" });
  }

  if (otp !== activeUser.accessToken) {
    return res.status(404).json({ message: "incorrect otp" });
  }

  activeUser.accessToken = null;
  activeUser.save();

  res.clearCookie("verifyToken");
  return res
    .status(200)
    .json({ message: "active user successful", user: activeUser });
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
  return res
    .status(200)
    .json({ message: "active user successful", user: activeUser });
});

/**
 * @DESC resend activition otp
 * @ROUTE /api/v1/auth/resendActivitionOtp
 * @method GET
 * @access public
 */

export const resendActivitionOtp = asyncHandler(async (req, res) => {
  //get auth from url
  const { email } = req.params;

  //otp for activation code
  const activateCode = createOtp();

  let authEmail = null;
  let authUser = null;

  if (isValidEmail(email)) {
    authEmail = email;
    //existing email check
    authUser = await User.findOne({ email });
  }

  // create access token
  const verifyToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });

  res.cookie("verifyToken", verifyToken);

  //activation link
  const activeLink = `http://localhost:3000/activation/${dotToHyphene(
    verifyToken
  )}`;

  await activatedEmail(email, {
    name: authUser.name,
    code: activateCode,
    link: activeLink,
  });

  authUser.accessToken = activateCode;
  authUser.save();

  res
    .status(200)
    .json({ message: "activation code send successful", user: authUser });
});

/**
 * @DESC Forget Password
 * @ROUTE /api/v1/auth/forgetpassword
 * @method POST
 * @access public
 */

export const forgetPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "all fields are required" });
  }

  //otp for activation code
  const activateCode = createOtp();

  let forgetUser = null;

  if (isValidEmail(email)) {
    //existing email check
    forgetUser = await User.findOne({ email });
  }

  //check email
  if (!forgetUser) {
    return res.status(400).json({ message: "user not found" });
  }

  // create access token
  const verifyToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });

  res.cookie("verifyToken", verifyToken);

  //activation link
  const activeLink = `http://localhost:3000/activation/${dotToHyphene(
    verifyToken
  )}`;

  await activatedEmail(email, {
    name: forgetUser.name,
    code: activateCode,
    link: activeLink,
  });

  forgetUser.accessToken = activateCode;
  forgetUser.save();

  res.status(200).json({ message: "forget password successful" });
});

/**
 * @DESC Reset Password
 * @ROUTE /api/v1/auth/forgetpassword
 * @method POST
 * @access public
 */

export const resetPassword = asyncHandler(async (req, res) => {
  const { token } = req.params;
  const { newPass, confPass, otp } = req.body;

  if (!token) {
    return res.status(400).json({ message: "token not found" });
  }
  if (!newPass) {
    return res.status(400).json({ message: "newPfdsfsf is required" });
  }
  if (!confPass) {
    return res.status(400).json({ message: "confirm password is required" });
  }
  if (!otp) {
    return res.status(400).json({ message: "otp not found" });
  }
  if (newPass !== confPass) {
    return res.status(400).json({ message: "password not match" });
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
  let resetUser = null;

  if (isValidEmail(tokenCheck.email)) {
    resetUser = await User.findOne({ email: tokenCheck.email });

    if (!resetUser) {
      return res.status(404).json({ message: "active user not found" });
    }
  } else {
    return res.status(404).json({ message: "user is undefined" });
  }

  if (otp !== resetUser.accessToken) {
    return res.status(404).json({ message: "incorrect otp" });
  }

  const hashPass = await bcrypt.hash(newPass, 10);
  resetUser.password = hashPass;
  resetUser.accessToken = null;
  resetUser.save();

  res.status(200).json({ message: "reset password successful" });
});
