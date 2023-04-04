import React, { useEffect, useState } from "react";
import RestDetailsCover from "../components/RestDetailsCover";
import FoodCategories from "../components/FoodCategories";
import MenuDetails from "../components/MenuDetails";
import Cart from "../components/Cart";
import { useLocation } from "react-router-dom";
import * as ReactDOM from "react-dom";
import { menu_detail_list } from "../config/firebase";
import updateSelectedCategories from "../components/MenuDetails";

function RestaurantDetails() {
  const [cartItemsList, setCartItemsList] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const [showCartList, setshowCartList] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const location = useLocation();
  const rest_data = location.state.data;
  const [itemCategory, setitemCategory] = useState([]);
  const [menuItems, setmenuItems] = useState([]);
  const [items, setItems] = useState([]);
  console.log(rest_data);

  //const id = rest_data.id;
  console.log(rest_data.id);
  //console.log(location.state.data);
  // Use data to access restaurant related details like profile img, username, category, dish for various purposes
  // console.log(location);
  // const { data } = location.state;

  useEffect(() => {
    menu_detail_list(rest_data.id)
      .then((result) => {
        setmenuItems(result);
        console.log(result);
        console.log(menuItems);
        let itemCategory = [
          ...new Set(result.map((Val) => Val.itemCategory.toLowerCase())),
        ];
        setitemCategory(itemCategory);
        console.log(itemCategory);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  useEffect(() => {
    setItems(menuItems);
  }, [menuItems]);

  const addToCart = (props) => {
    if (props) {
      console.log(props);
      const item = { itemPrice: props.restPrice, itemTitle: props.restName };
      cartItemsList.push(item);
      settotalPrice(totalPrice + Number(item.itemPrice));
      setCartItemsList(cartItemsList);
      setshowCartList(true);
    }
  };

  const removeCartItem = (item) => {
    const index = cartItemsList.findIndex(
      (element) => element.itemTitle === item.itemTitle
    );
    if (index != -1) {
      cartItemsList.splice(index, 1);
      setCartItemsList(cartItemsList);
      settotalPrice(totalPrice - item.itemPrice);
    }
  };

  function filter(category) {
    if (selectedCategories.find((res) => res === category) != null) {
      const index = selectedCategories.indexOf(category);
      if (index > -1) {
        selectedCategories.splice(index, 1);
      }
    } else {
      selectedCategories.push(category);
    }
    setSelectedCategories(() => {
      return [...selectedCategories];
    });
  }

  return (
    <div>
      <RestDetailsCover rest_data={rest_data} />
      <div className="container-fluid bg-slate-200">
        <div className="container mx-auto">
          <div className="flex mx-auto flex-col md:flex-row lg:flex-row sm:space-x-0  md:space-x-4 lg:space-x-4 pt-10 pl-20 pb-10 ml-10">
            <div className="w-1/3 justify-center">
              <FoodCategories filter={filter} itemCategory={itemCategory} />
            </div>
            <div className="w-2/3 flex justify-center">
              <MenuDetails
                selectedCategories={selectedCategories}
                addToCart={addToCart}
                items={items}
              />
            </div>
            <div className="w-1/3 justify-center">
              <Cart
                cartItemsList={cartItemsList}
                currentTotalPrice={totalPrice}
                removeCart={removeCartItem}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
