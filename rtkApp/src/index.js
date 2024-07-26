import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import newCounterReducer from "./newCounterSlice"

//console.log("counterReducer",counterReducer);

const store = configureStore({
   reducer: {
     counter: counterReducer,
     newcounter: newCounterReducer,
   },
 });

//console.log("store",store);

 export default store