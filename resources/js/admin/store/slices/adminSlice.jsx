import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

export const adminSlice = createSlice({
  name: 'admin',
  initialState: initialState,
  reducers: {
    login: (previousState, action) => {
      console.log(previousState);
      console.log(action);

      return previousState;
    },
    logout: (state) => {
      //;
    },
  },
});

export const { login, logout } = adminSlice.actions;

export default adminSlice.reducer;
