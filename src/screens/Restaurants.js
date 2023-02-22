import React from "react";
import SearchRestOnRestPage from "../components/SearchRestOnRestPage";
import RestList from "../components/RestList";

function Restaurants() {
  return (
    <div>
      <SearchRestOnRestPage dataTestId="Search_Restaurants_On_RestPage"></SearchRestOnRestPage>
      <RestList dataTestId="Featured_Restaurants"></RestList>
    </div>
  );
}

export default Restaurants
