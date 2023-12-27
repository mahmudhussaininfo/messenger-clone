import { createSlice } from "@reduxjs/toolkit";
import {
  activationLogin,
  activationLoginLink,
  createUser,
  forgetPassword,
  getLoggedInUser,
  loginUser,
  logoutUser,
  resendActivitionLink,
  resetPassword,
  uploadPhoto,
} from "./authApiSlice";

// create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    message: null,
    error: null,
    loader: false,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
    setLogout: (state) => {
      state.message = null;
      state.error = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false;
      })
      //activation with otp start
      .addCase(activationLogin.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(activationLogin.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(activationLogin.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false;
        state.user = action.payload.user;
      })
      .addCase(activationLoginLink.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(activationLoginLink.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(activationLoginLink.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false;
        state.user = action.payload.user;
      })
      //activation with otp end
      //resend activition start
      .addCase(resendActivitionLink.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(resendActivitionLink.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(resendActivitionLink.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false;
      })
      //resend activition end
      //forget password start
      .addCase(forgetPassword.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false;
      })
      //forget password end
      //reset password start
      .addCase(resetPassword.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false;
      })
      //reset password end
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = action.payload.user;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(uploadPhoto.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = true;
      })
      .addCase(uploadPhoto.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
        state.user = action.payload.user;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = null;
        localStorage.removeItem("user");
      })
      .addCase(getLoggedInUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.user = null;
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

// selectors
export const getAuthData = (state) => state.auth;
// actions
export const { setMessageEmpty, setLogout } = authSlice.actions;

// export
export default authSlice.reducer;
