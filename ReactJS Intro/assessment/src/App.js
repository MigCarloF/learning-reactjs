import './App.css';
import { useState } from 'react'

// props are arguments passed to functions from jsx
function Person(props){
  return(
    <div>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Gender: {props.gender}</p>
    </div>
  );
}

function Props() {
  return (
    <div className="App">
      <Person name='Jack' age='24' gender='Male' />
      <Person name='Jane' age='25' gender='Female' />
    </div>
  );
}

// states are used to track variables
function State(){
  const [counter, setCounter] = useState(0);

  return(
    <div>
      <button onClick={() => {setCounter(counter + 1)}}>+</button>
      <h1>Counter: {counter}</h1>
      <button onClick={() => {setCounter(counter - 1)}}>-</button>
    </div>
  );
}

export default State;
