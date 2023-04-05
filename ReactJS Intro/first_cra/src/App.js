import './App.css';

function Person(props) {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

function App() {
  const name = 'Bobster';

  return (
    <div className="App">
      <h1> 
        {name === 'Bobster' ? (<>yes</>) : 'no'}
      </h1>
      <Person
        name={'John'}
        lastName='Doe'
        age={25}
      />
      <Person
        name={'Timmy'}
        lastName='Turner'
        age={14}
      />
    </div>
  );
}

export default App;
