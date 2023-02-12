import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authState: "non-logged",
    token: null,
    requiredPage: null
  },
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.authState = "logged";
      state.token = action.payload;
    },
    logout: (state) => {
      state.authState = "non-logged"
      state.token = null;
    },
    setLocation: (state, action) => {
        state.requiredPage = action.payload
    }
  },
});

export const { login, logout, setLocation } = authSlice.actions