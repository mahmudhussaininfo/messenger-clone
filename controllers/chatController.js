import expressAsyncHandler from "express-async-handler";
import Chat from "../models/Chat.js";

/**
 * @DESC Chat
 * @ROUTE /api/v1/chat
 * @method get
 * @access public
 */
export const getChat = expressAsyncHandler(async (req, res) => {
  const senderId = req.me._id;
  const receverId = req.params.id;

  const getAllChat = await Chat.find({
    $or: [
      {
        $and: [
          { senderId: { $eq: senderId } },
          { receverId: { $eq: receverId } },
        ],
      },
      {
        $and: [
          { senderId: { $eq: receverId } },
          { receverId: { $eq: senderId } },
        ],
      },
    ],
  });

  res.status(200).json({ chats: getAllChat });
});

/**
 * @DESC Chat create
 * @ROUTE /api/v1/chat
 * @method POST
 * @access public
 */
export const chatCreate = expressAsyncHandler(async (req, res) => {
  const { chat, receverId } = req.body;

  const senderId = req.me._id;

  const chatMsg = await Chat.create({
    message: {
      text: chat,
    },
    receverId,
    senderId,
  });

  res.status(200).json({ message: "chat create done", chatMsg });
});
