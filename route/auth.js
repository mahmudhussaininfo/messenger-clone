import express from "express";
import {
  login,
  logout,
  register,
  loggedInUser,
  makeHashPass,
  accountActivationWithOtp,
  accountActivationWithLink,
  resendActivitionOtp,
  forgetPassword,
  resetPassword,
  profilePhotoUpload,
} from "../controllers/authController.js";
import tokenVerify from "../middlewares/verifyToken.js";
import { profilePhoto } from "../utils/multer.js";

const router = express.Router();

// create route
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/hash").post(makeHashPass);
router.route("/register").post(register);
router.route("/activation-by-otp/:token").post(accountActivationWithOtp);
router.route("/activation-by-link/:token").post(accountActivationWithLink);
router.route("/resend-activation-otp/:auth").get(resendActivitionOtp);
router.route("/forget-password").post(forgetPassword);
router.route("/reset-password/:token").post(resetPassword);
router
  .route("/profile-photo-upload/:id")
  .post(profilePhoto, profilePhotoUpload);
router.get("/me", tokenVerify, loggedInUser);

// export default router
export default router;
