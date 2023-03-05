import { createSlice } from '@reduxjs/toolkit';
import { Admin } from '../../inrterfaces/admin';

export interface AdminState extends Admin {}

const initialState: AdminState | null = null;

export const adminSlice = createSlice({
  name: 'admin',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;

      return state;
    },
    logout: (state) => {
      //;
    },
  },
});

export const { login, logout } = adminSlice.actions;

export default adminSlice.reducer;
