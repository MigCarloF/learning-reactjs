import './App.css';
import { useState } from 'react'

// Creates a button
function MyButton(){
  return(
    <button>Lmao</button>
  );
}

// Showcases empty <> </> Wrapper to use multiple tags
function AboutPage(){
  return(
    <>
      <h1>About</h1>
      <p>
        Hi there<br />
        How are you?
      </p>
    </>
  );
}

// Showcases lists
function RenderingLists(){
  const products = [
    { name:'Cabbage', isFruit: false, id: 1 },
    { name:'Garlic', isFruit: false, id: 2 },
    { name:'Apple', isFruit: true, id: 3 }
  ];

  const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.name}
      </li>
    );

    return (
        <ul>{listItems}</ul>
      );
}

// Button with event handler
let MyButtonWithFunction = () => {
  function handleClick(){
    alert('You clicked me!');

  }

  return(
    <>
    <button onClick={handleClick}>
      Click Me
    </button>
    <br/>
    </>
  );
}


// States
function MyButtonCounter() {
  const [count, setCount] = useState(0);

  function incrementClick(){
    setCount(count + 1);
  }

  function decrementClick(){
    setCount(count - 1);
  }


  return(
    <>
    <button onClick={incrementClick}>+</button>
    <h1>{count}</h1>
    <button onClick={decrementClick}>-</button>
    <br/>
    </>
  );
}

// Hooks: Synced updating buttons
function HooksIntroButton({count, onClick}){
  return(
    <div>
    <button onClick={onClick}>
      Clicked {count} times
    </button>
    </div>
  );
}

function HooksIntro(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return(
    <div className='syncedButton'>
      <h1>Buttons that update together</h1>
      <HooksIntroButton count={count} onClick={handleClick} />
      <HooksIntroButton count={count} onClick={handleClick} />
    </div>
  );
}

// Showcases data displaying using props
function UserGreeting(props){
  return(
    <div className="UserGreeting">
      <p>Hello, {props.name}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>Welcome to my App</h1>
      <MyButton />
      <AboutPage />
      <UserGreeting name="Bobster"/>
      <RenderingLists />
      <MyButtonWithFunction />
      <MyButtonCounter />
      <MyButtonCounter />
      <HooksIntro />
    </div>
  );
}

export default App;