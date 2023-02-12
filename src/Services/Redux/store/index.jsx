import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../slice/authSlice";
import { profileSlice } from "../slice/profileSlice";

export const store = configureStore({
  reducer: {
    // State lnked to authentification & JWT token
    auth: authSlice.reducer,
    // State linked to profile management
    profile: profileSlice.reducer
  }
})