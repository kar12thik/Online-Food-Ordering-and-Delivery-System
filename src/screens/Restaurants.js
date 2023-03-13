import { useEffect, React } from "react";
import SearchRestOnRestPage from "../components/SearchRestOnRestPage";
import RestList from "../components/RestList";
import Data from "../assets/images/data";
import { useState } from 'react';

function Restaurants() {
  const [item, setItem] = useState(Data);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <SearchRestOnRestPage dataTestId="Search_Restaurants_On_RestPage"></SearchRestOnRestPage>
      <RestList dataTestId="Featured_Restaurants" item={item}></RestList>
    </div>
  );
}

export default Restaurants
