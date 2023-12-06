import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import {
  createOtp,
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
  const { email, password } = req.body;

  // validation
  if (!email || !password)
    return res.status(404).json({ message: "All fields are required" });

  // find login user by email
  const loginUser = await User.findOne({ email }).populate("role");

  // user not found
  if (!loginUser) return res.status(404).json({ message: "User not found" });

  // password check
  const passwordCheck = await bcrypt.compare(password, loginUser.password);

  // password check
  if (!passwordCheck)
    return res.status(404).json({ message: "Wrong password" });

  // create access token
  const token = jwt.sign(
    { email: loginUser.email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN,
    }
  );

  // create Refresh token
  const refreshToken = jwt.sign(
    { email: loginUser.email },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRE_IN,
    }
  );

  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: process.env.APP_ENV == "Development" ? false : true,
    sameSite: "strict",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    token,
    user: loginUser,
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
    const token = jwt.sign(
      { email: auth, otp: activateCode },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );

    res.cookie("verifyToken", token, {
      httpOnly: true,
      secure: process.env.APP_ENV == "Development" ? false : true,
      sameSite: "strict",
      path: "/",
      maxAge: 15 * 60 * 1000,
    });

    //activation link
    const activeLink = `http://localhost:3000/acivelink/${token}`;

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
