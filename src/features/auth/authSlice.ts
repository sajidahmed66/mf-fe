import { createSlice } from "@reduxjs/toolkit";

export interface IauthState {
  accessToken: string | undefined;
  // userId: string | undefined;
  // userRole: number | undefined;
}

const initialState: IauthState = {
  accessToken: undefined,
  // userId: undefined,
  // userRole: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      // state.userId = action.payload.useId;
      // state.userRole = action.payload.userRole;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      // state.userId = undefined;
      // state.userRole = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
