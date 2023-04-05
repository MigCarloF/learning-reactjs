import { useState } from 'react';
import './App.css';

function MyButton({count, onClick}){
  return(
      <button onClick={onClick}>
        {count}
      </button>
  );
}

// function MyButton({ count, onClick }) {
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   );
// }

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>Counters that should update together</h1>
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
