import './App.css'

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
import App1 from './App1';

//console.log("increment",increment);
//console.log("decrement",decrement);

function App() {
  const counter = useSelector((state) => {
    console.log("state",state); //It's an object coming from initialState of counterSlice
    //initialState: { value: 0 }
    //It also gives updated value
    //counter is the name of slice
    console.log("state.counter",state.counter);

    return state.counter.value
  });
  const dispatch = useDispatch();
  //console.log("typeof dispatch",typeof dispatch); //function

  console.log("counter",counter); //Gives present value of counter

  return (
    <div className="App">
      <h1>Redux Counter App</h1>
      <p>Counter value: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <App1 />
    </div>
  )
}

export default App