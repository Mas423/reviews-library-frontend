import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LoginStatus = {
  isLogin: boolean;
};

const initialState: LoginStatus = {
  isLogin: false,
};

export const loginSlice = createSlice({
  name: 'loginStatus',
  initialState,
  reducers: {
    updateLoginStatus: (state: LoginStatus, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

export const { updateLoginStatus } = loginSlice.actions;

export default loginSlice.reducer;
