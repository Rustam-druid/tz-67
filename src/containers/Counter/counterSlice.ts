import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number[];
};

const initialState: CounterState = {
    value: [],
};


const counterSlice = createSlice({
    name: 'counter',
   initialState,
    reducers:{

      increaseArrNumber: (state, action: PayloadAction<string | number>) => {
        if (typeof action.payload === 'string') {
          state.value.push(parseInt(action.payload, 10));
        } else {
          state.value.push(action.payload);
        }
      },
        del: (state) => {
          state.value.pop();
        },
      emty: (state) => {
          state.value = [];
      }

    }
});

export const counterReducer = counterSlice.reducer;

export const { del,increaseArrNumber, emty} = counterSlice.actions;