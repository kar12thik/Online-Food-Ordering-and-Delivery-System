import "./App.css";
import * as Sentry from "@sentry/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
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
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const user = useSelector((state) => state.loggedInUser);

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
        <Route
          path="/order-requests"
          element={
            <ProtectedRoute user={user.loggedIn} redirectPath={"/login"}>
              <MyOrders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-menu-items"
          element={
            <ProtectedRoute user={user.loggedIn} redirectPath={"/login"}>
              <AddMenuItem />
            </ProtectedRoute>
          }
        />
        <Route path="/my-foods" element={<MyFoods />} />
        <Route
          path="/my-orders"
          element={
            <ProtectedRoute user={user.loggedIn} redirectPath={"/login"}>
              <MyOrders />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default Sentry.withProfiler(App);
