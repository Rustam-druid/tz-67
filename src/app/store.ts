import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../containers/Counter/counterSlice.ts';
import { countrReducer } from '../containers/Calculator/CalculatorSlice.ts';




export const store = configureStore({
  reducer: {
    counter: counterReducer,
    count: countrReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;