import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { useDispatch } from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

const store = configureStore({
  reducer: rootReducer,
});

export default store;
