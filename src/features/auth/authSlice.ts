import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IauthState {
  accessToken: string | undefined;
  // userId: string | undefined;
  // userRole: number | undefined;
}

const initialState: IauthState = {
  accessToken: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
