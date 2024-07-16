import { useState } from 'react';
import './App.css';

function App() {
  let [counter,setCounter] = useState(0);

  const increaseValue = () => {
    setCounter(counter + 1);
  }

  const decreaseValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>REACT JS</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={increaseValue}>Increase Value : {counter}</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease Value : {counter}</button>
    </>
  )
}

export default App
