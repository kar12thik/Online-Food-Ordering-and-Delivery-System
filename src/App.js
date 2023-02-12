import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Restaurants from "./screens/Restaurants";
import RegisterRestaurants from "./screens/RegisterRestaurant";
import Orders from "./screens/Orders";
import Footer from "./components/Footer";

function App() {
  console.log(process.env);
  return (
    <div>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route
            path="/register-restaurant"
            element={<RegisterRestaurants />}
          />
          <Route path="/orders" element ={ <Orders/>} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
