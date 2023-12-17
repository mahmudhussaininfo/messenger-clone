import express from "express";
import {
  login,
  logout,
  register,
  loggedInUser,
  makeHashPass,
  accountActivationWithOtp,
  accountActivationWithLink,
} from "../controllers/authController.js";
import tokenVerify from "../middlewares/verifyToken.js";

const router = express.Router();

// create route
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/hash").post(makeHashPass);
router.route("/register").post(register);
router.route("/activation-by-otp/:token").post(accountActivationWithOtp);
router.route("/activation-by-link/:token").post(accountActivationWithLink);

router.get("/me", tokenVerify, loggedInUser);

// export default router
export default router;
