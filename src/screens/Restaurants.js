import { useEffect, React } from "react";
import SearchRestOnRestPage from "../components/SearchRestOnRestPage";
import RestList from "../components/RestList";
import { useState } from "react";
import RestCategories from "../components/RestCategories";
import { restaurant_list } from "../config/firebase";
import { useLocation, useNavigate } from 'react-router-dom';

function Restaurants() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [item, setItem] = useState(restaurantList);
  const [categorybar, setCategorybar] = useState(false);
  const [searchBoxText, setSearchBoxText] = useState("");
  const [filterCat, setFilterCat] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  function filterItem(filterCategory) {
    setFilterCat(filterCategory);
  }

  function handleSearchBar(searchBoxText) {
    setSearchBoxText(searchBoxText);
  }

  useEffect(() => {
    restaurant_list()
      .then((result) => {
        setRestaurantList(result);
        let menuItems = [
          ...new Set(result.map((Val) => Val.category.toLowerCase())),
        ];
        setMenuItems(menuItems);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    setItem(restaurantList);
  }, [restaurantList]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    var tempItem = [];

    if(location.state){
      setSearchBoxText(location.state.searchBoxText);
      navigate(location.state, {}); 
    }

    if (filterCat.length > 0) {
      tempItem = restaurantList.filter((newVal) => {
        return filterCat.includes(newVal.category.toLowerCase());
      });
    } else {
      tempItem = restaurantList;
    }

    tempItem = tempItem.filter((val) => {
      return (
        val.restName
          .toLocaleLowerCase()
          .indexOf(searchBoxText.toLocaleLowerCase()) !== -1
      );
    });

    setItem(tempItem);
  }, [searchBoxText, filterCat, restaurantList]);

  return (
    <div>
      <SearchRestOnRestPage
        dataTestId="Search_Restaurants_On_RestPage"
        restaurantList={restaurantList}
        handleSearchBar={handleSearchBar}
        placeholder={ searchBoxText }
      ></SearchRestOnRestPage>
      <div className="">
        <div className="container-fluid bg-slate-200 w-full flex mx-auto flex-col md:flex-row lg:flex-row sm:space-x-0 md:space-x-4 lg:space-x-4 pt-10 pb-10 px-3">
          <div className="w-1/3 justify-center md:block">
            <div className="sticky top-0">
              <RestCategories
                categorybar={categorybar}
                setCategorybar={setCategorybar}
                menuItems={menuItems}
                filterItem={filterItem}
              ></RestCategories>
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

export default Restaurants;
