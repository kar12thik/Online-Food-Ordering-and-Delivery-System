import React from "react";
import SearchRestOnRestPage from "../components/SearchRestOnRestPage";
import FeaturedRest from "../components/FeaturedRest";

function Restaurants() {
  return (
    <div>
      <SearchRestOnRestPage dataTestId="Search_Restaurants_On_RestPage"></SearchRestOnRestPage>
      <FeaturedRest dataTestId="Featured_Restaurants"></FeaturedRest>
    </div>
  );
}

export default Restaurants
