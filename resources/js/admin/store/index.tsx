import { combineReducers, configureStore } from '@reduxjs/toolkit';
import adminSlice, { AdminState } from './slices/adminSlice';

export interface RootState {
  admin: AdminState;
  // add more state slices here as needed
}

const rootReducer = combineReducers({
  admin: adminSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
