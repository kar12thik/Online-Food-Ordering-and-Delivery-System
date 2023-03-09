import React from "react";
import ProcessInfo from "../components/ProcessInfo";
import FeaturedRest from "../components/FeaturedRest";
import SearchRest from "../components/SearchRest";
import OrderNow from "../components/OrderNow";

function Home() {
  return (
    <div className="App">
      <SearchRest dataTestId="Search_Restaurants" />
      <ProcessInfo dataTestId="Howitworks" />
      <OrderNow dataTestId="OrderNow" />
      <FeaturedRest dataTestId="FeaturedRestaurants" />
    </div>
  );
}

export default Home;
