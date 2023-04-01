import "./App.css";
import * as Sentry from "@sentry/react";
import React from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Restaurants from "./screens/Restaurants";
import RegisterRestaurants from "./screens/RegisterRestaurant";
import RestaurantDetails from "./screens/RestaurantDetails";
import Orders from "./screens/Orders";
import Footer from "./components/Footer";
import OrderRequests from "./screens/OrderRequest";
import AddMenuItem from "./screens/AddMenuItems";
import MyFoods from "./screens/MyFoods";
import MyOrders from "./screens/MyOrders";

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
        <Route path="/restaurant-details" element={<RestaurantDetails />} />
        <Route path="/order-requests" element={<OrderRequests />} />
        <Route path="/add-menu-items" element={<AddMenuItem />} />
        <Route path="/my-foods" element={<MyFoods />} />
        <Route path="/my-orders" element={<MyOrders />} />
      </Routes>
      <Footer />
      <button
        onClick={() => {
          throw Error("OOps");
        }}
      >
        Break the world
      </button>
      ;
    </div>
  );
}

export default Sentry.withProfiler(App);
