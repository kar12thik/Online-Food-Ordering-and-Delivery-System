import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MenuDetails from "./components/MenuDetails";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Restaurants from "./screens/Restaurants";
import RegisterRestaurants from "./screens/RegisterRestaurant";
import RestaurantDetails from "./screens/RestaurantDetails";
import Orders from "./screens/Orders";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/register-restaurant" element={<RegisterRestaurants />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/menu-details" element ={ <Menudetails/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
