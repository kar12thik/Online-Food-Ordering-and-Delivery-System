import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ProcessInfo from "./components/ProcessInfo";
import Footer from "./components/Footer";
import FeaturedRest from "./components/FeaturedRest";
import SearchRest from "./components/SearchRest";
import OrderNow from "./components/OrderNow";

function App() {
  console.log(process.env);
  return (
    <div className="App h-full flex flex-col">
      <NavBar />
      <Banner />
      <ProcessInfo />
      <SearchRest/>
      <OrderNow/>
      <FeaturedRest />
      <Footer />
      {/* <h1 className="text-3xl font-bold underline">
        OFODS - React Dev Environment Setup
      </h1>
      <h2>{process.env.REACT_APP_NAME}</h2>
      <h3>Env : {process.env.REACT_APP_ENV}</h3> */}
    </div>
  );
}

export default App;
