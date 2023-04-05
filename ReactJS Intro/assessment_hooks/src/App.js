import { useState, useEffect, useRef } from 'react';
import './App.css';

// State hook
function AppState() {
  const [count, setCount] = useState(() => 0);


  function increment(){
    setCount(prevCount => prevCount + 1);
  }

  function decrement(){
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
}

// Effect hook
function AppEffect(){
  const [resourceType, setResourceType] = useState(() => 'posts');
  
  useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => console.log(json))
  }, [resourceType])

  return(
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <h1>{resourceType}</h1>
    </div>
  );
}

// Ref hook (Just like State but does not rerender)
function AppRef(){
  const [name, setName] = useState(0);

  // renderCount = { current: 0 }
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
    <input value={name} onChange={e => setName(e.target.value)}/>
    <div>
      <p>My name is {name}</p>
      <p>I rendered {renderCount.current} times</p>
    </div>
    </>
  );
}

// Ref hook (Another usecase which stores previous data)
function AppRef2(){
  const [name, setName] = useState(0);
  const prevName = useRef('');

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
    <input value={name} onChange={e => setName(e.target.value)}/>
    <div>
      <p>My name is {name}. It used to be {prevName.current}</p>
    </div>
    </>
  );
}

// Context hook
function AppContext(){

}

export default AppRef2;
