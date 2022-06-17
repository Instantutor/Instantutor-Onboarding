import './App.css';

function App() {

  const name = 'Dave'
  const x = 7
  const y = true

  return (
    <div className="App">
      <h1>Hello from James - React tutorial</h1>
      <h2>Hello {name} it has been {49 / x} years since you have turned me on.</h2>
      <h3>Sup, look at this if else {y ? 'True' : 'False'} </h3>
    </div>

    /*
    Can't have any components outside of the Div since that is the singular parent component.
    */
  );
}

export default App;
