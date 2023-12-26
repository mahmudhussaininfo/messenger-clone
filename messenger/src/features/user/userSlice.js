import { createSlice } from "@reduxjs/toolkit";
import { getAllUser, userCreate } from "./userApiSlice";

// create auth slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: null,
    message: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.user = action.payload.users;
      })
      .addCase(userCreate.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(userCreate.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = state.user ?? [];
        state.user.push(action.payload.user);
      });
  },
});

// selectors
export const getAllUserInfo = (state) => state.user;
// actions
export const { setMessageEmpty } = userSlice.actions;

// export
export default userSlice.reducer;
