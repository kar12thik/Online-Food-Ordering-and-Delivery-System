import React, { useEffect } from "react";
import ProcessInfo from "../components/ProcessInfo";
import FeaturedRest from "../components/FeaturedRest";
import SearchRest from "../components/SearchRest";
import OrderNow from "../components/OrderNow";
import { restaurant_list } from "../config/firebase";
import { useState } from "react";

function Home() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [item, setItem] = useState(restaurantList);
  useEffect(() => {
    restaurant_list().then((result) => {
      setRestaurantList(result);
    }).catch((error) => {
      console.error('Error:', error);
    });
  }, []);

  useEffect(() => {
    setItem(restaurantList);
  }, [restaurantList]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <SearchRest dataTestId="Search_Restaurants" restaurantList={restaurantList} />
      <ProcessInfo dataTestId="Howitworks" />
      <OrderNow dataTestId="OrderNow" />
      <FeaturedRest dataTestId="FeaturedRestaurants" />
    </div>
  );
}

export default Home;
