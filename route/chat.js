import express from "express";

import tokenVerify from "../middlewares/verifyToken.js";
import { chatCreate, getChat } from "../controllers/chatController.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route

router.route("/").post(chatCreate);
router.route("/:id").get(getChat);

// export default router
export default router;
