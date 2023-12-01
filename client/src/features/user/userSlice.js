import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    userId: "",
    userLoggedIn: false
  },
  reducers: {
    setEmail: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.email = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    userIsLoggedIn: (state,action) => {
      state.userLoggedIn = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setEmail, setUserId, userIsLoggedIn } = userSlice.actions;


export default userSlice.reducer;
