import { useEffect, React } from "react";
import SearchRestOnRestPage from "../components/SearchRestOnRestPage";
import RestList from "../components/RestList";
import Data from "../assets/images/data";
import { useState } from 'react';
import RestCategories from "../components/RestCategories";

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
  const [categorybar, setCategorybar] = useState(false);
  return (
    <div>
      <SearchRestOnRestPage dataTestId="Search_Restaurants_On_RestPage"></SearchRestOnRestPage>
      <div className="">
        <div className="container-fluid bg-slate-200 w-full flex mx-auto flex-col md:flex-row lg:flex-row sm:space-x-0 md:space-x-4 lg:space-x-4 pt-10 pb-10">
          <div className="w-1/3 justify-center md:block">
            <div className="sticky top-0">
      <RestCategories categorybar={categorybar} setCategorybar={setCategorybar} menuItems={menuItems} filterItem={filterItem}></RestCategories>
          </div>
        </div>
        <div className="w-full md:w-full lg:w-2/3 justify-center">
          <RestList dataTestId="Featured_Restaurants" item={item}></RestList>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Restaurants
