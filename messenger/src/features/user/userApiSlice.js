import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create Role
export const getAllUser = createAsyncThunk("user/getAllUser", async (data) => {
  try {
    const response = await axios.get(`http://localhost:5050/api/v1/user`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Create Role
export const userCreate = createAsyncThunk("user/userCreate", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:5050/api/v1/user`,
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
