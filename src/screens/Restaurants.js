import { useEffect, React } from "react";
import SearchRestOnRestPage from "../components/SearchRestOnRestPage";
import RestList from "../components/RestList";
import Data from "../assets/images/data";
import { useState } from 'react';

function Restaurants() {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

   function filterItem(filterCategory) {
    if (filterCategory.length > 0) {
      const newItem = Data.filter((newVal) => {
        return filterCategory.includes(newVal.category);
      });
      setItem(newItem);
    }
    else {
      setItem(Data);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <SearchRestOnRestPage dataTestId="Search_Restaurants_On_RestPage"></SearchRestOnRestPage>
      <RestList dataTestId="Featured_Restaurants" item={item} menuItems={menuItems} setItem={setItem} filterItem={filterItem}></RestList>
    </div>
  );
}

export default Restaurants
