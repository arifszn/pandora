import { combineReducers, configureStore } from '@reduxjs/toolkit';
import adminSlice, { AdminState } from './slices/adminSlice';

const rootReducer = combineReducers({
  admin: adminSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
