import { createSlice } from '@reduxjs/toolkit';
import { Admin } from '../../inrterfaces/admin';

export type AdminState = Admin;

const initialState: AdminState | null = null;

export const adminSlice = createSlice({
  name: 'admin',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;

      return state;
    },
    logout: () => {
      //;
    },
  },
});

export const { login, logout } = adminSlice.actions;

export default adminSlice.reducer;
