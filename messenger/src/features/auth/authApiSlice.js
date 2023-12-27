import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// register user
export const createUser = createAsyncThunk("auth/createUser", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/auth/register",
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

// Login user
export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/auth/login",
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

// Login user
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/auth/logout",
      "",
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Login user
export const getLoggedInUser = createAsyncThunk(
  "auth/getLoggedInUser",
  async () => {
    try {
      const response = await axios.get("http://localhost:5050/api/v1/auth/me", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// for activation otp and token
export const activationLogin = createAsyncThunk(
  "auth/activationLogin",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/auth/activation-by-otp/${data.token}`,
        { otp: data.otp },
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

// for activation with link
export const activationLoginLink = createAsyncThunk(
  "auth/activationLoginLink",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/auth/activation-by-link/${data}`,
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

//resend activition link
export const resendActivitionLink = createAsyncThunk(
  "auth/resendActivitionLink",
  async (auth) => {
    try {
      const response = await axios.get(
        `http://localhost:5050/api/v1/auth/resend-activation-otp/${auth}`,
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

//forget password
export const forgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/auth/forget-password",
        data,
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

//reset password
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/auth/reset-password/${data.token}`,
        data.input,
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

//upload photo
export const uploadPhoto = createAsyncThunk(
  "auth/uploadPhoto",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/auth/profile-photo-upload/${data.id}`,
        data.photo,
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
