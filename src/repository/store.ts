import { configureStore, createSelector } from '@reduxjs/toolkit';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import counterReducer from './counterSlice';
import zennApiReducer from './zennApiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    zennApi: zennApiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export const zennApiSelector = (state: RootState) => state.zennApi;
export const zennTrendSelector = createSelector(zennApiSelector, (zenn) => {
  return zenn.trends;
});
