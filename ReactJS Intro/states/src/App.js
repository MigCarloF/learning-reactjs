import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State declaration
  const [counter, setCounter] = useState(0);

  // Effect happens when event happens
  // useEffect( () => {
  //   alert('Reload')
  // },);

  // Effect happens when the state in the 2nd argument has been changed (Infinite Loop)
  //useEffect(() => {
  //  alert('you changed the counter to ' + counter)
  //}, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
    </div>
  );
}

export default App;