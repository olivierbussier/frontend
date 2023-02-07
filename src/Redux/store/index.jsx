import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../slice/authSlice";
import { profileSlice } from "../slice/profile";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    profile: profileSlice.reducer
  }
})