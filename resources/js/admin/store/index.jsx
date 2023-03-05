import { combineReducers, configureStore } from '@reduxjs/toolkit';
import adminSlice from './slices/adminSlice';

const rootReducer = combineReducers({
  admin: adminSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
