// src/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const newCounterSlice = createSlice({
  name: 'newcounter',
  initialState: { value: 0 },
  reducers: {
    newincrement: (state) => {
      //console.log("state",state);
      state.value += 2;
    },
    newdecrement: (state) => {
      //console.log("state",state);
      state.value -= 2;
    },
  },
});

//console.log("counterSlice",counterSlice); //object contains name,actions,reducer
//console.log("counterSlice.reducer\n",counterSlice.reducer);
//console.log("counterSlice.actions\n",counterSlice.actions);

export const { newincrement, newdecrement } = newCounterSlice.actions;
export default newCounterSlice.reducer;