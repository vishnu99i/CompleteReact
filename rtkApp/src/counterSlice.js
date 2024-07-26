// src/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      //console.log("state",state);
      state.value += 1;
    },
    decrement: (state) => {
      //console.log("state",state);
      state.value -= 1;
    },
  },
});

//console.log("counterSlice",counterSlice); //object contains name,actions,reducer
//console.log("counterSlice.reducer\n",counterSlice.reducer);
//console.log("counterSlice.actions\n",counterSlice.actions);

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;