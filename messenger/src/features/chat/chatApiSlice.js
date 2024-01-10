import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create chat
export const chatCreate = createAsyncThunk("chat/chatCreate", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:5050/api/v1/chat`,
      data,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// get chat
export const getUserToUserChat = createAsyncThunk(
  "chat/getUserToUserChat",
  async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:5050/api/v1/chat/${data}`,

        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
