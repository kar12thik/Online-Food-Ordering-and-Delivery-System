// import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log(process.env);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1 className="text-3xl font-bold underline">
        OFODS - React Dev Environment Setup
      </h1>
      <h2>{process.env.REACT_APP_NAME}</h2>
      <h3>Env : {process.env.REACT_APP_ENV}</h3>
    </div>
  );
}

export default App;
