import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    firstName: null,
    lastName: null,
    email: null,
  },
  reducers: {
    setProfile: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.id = action.payload.id
    },
    resetProfile: (state) => {
      state.firstName = null;
      state.lastName = null;
      state.email = null;
      state.id = null
    },
    setName: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    }
  },
});

export const { setProfile, resetProfile, setName } = profileSlice.actions