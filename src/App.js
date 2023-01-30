import "./App.css";

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        OFODS - React Dev Environment Setup
      </h1>
      <h2>{process.env.REACT_APP_NAME}</h2>
      <h3>Env : {process.env.REACT_APP_ENV}</h3>
    </div>
  );
}

export default App;
