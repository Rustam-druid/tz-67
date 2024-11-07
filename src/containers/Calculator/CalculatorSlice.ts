import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface countState {
  value: number[];
};

const initialState: countState = {
  value: [],
};

const CalculatorSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increaseArrNumber: (state, action: PayloadAction<string | number>) => {
      state.value.push(action.payload);
    },
    del: (state) => {
      state.value.pop();
    },
    emty: (state) => {
      state.value = [];
    },
    calculateResult: (state) => {
        const result = eval(state.value.join(''));
        state.value = [result];
    },
  },
});
export const countrReducer = CalculatorSlice.reducer;

export const { increaseArrNumber, del, calculateResult } = CalculatorSlice.actions;