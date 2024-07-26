import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './counterSlice';
import { newincrement,newdecrement } from './newCounterSlice';

function App2() {

   const counter = useSelector((state) => state.counter.value);
   const newcounter = useSelector((state) => state.newcounter.value);
   const dispatch = useDispatch()

  return (
    <div>
      <h1>App2</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <h1>New Counter : {newcounter}</h1>
      <button onClick={() => dispatch(newincrement())}>INCREMENT</button>
      <button onClick={() => dispatch(newdecrement())}>DECREMENT</button>
    </div>
  )
}

export default App2