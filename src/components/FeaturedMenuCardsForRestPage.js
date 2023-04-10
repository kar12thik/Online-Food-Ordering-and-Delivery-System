import React from "react";
import { BsPlusCircle } from "react-icons/bs";
function FeaturedMenuCardsForRestPage(props) {
  const data = props.restVal;
  const itemName = data.itemName;
  const itemImageUrl = data.itemImageUrl;
  const itemCategory =
    data.itemCategory.charAt(0).toUpperCase() + data.itemCategory.slice(1);
  const itemPrice = "$ " + data.itemPrice;
  const itemIngredients = data.itemIngredients;

  const handleClick = (event) => {
    event.preventDefault();
    props.addToCart(data);
  };

  return (
    <div className="items w-full">
      <a
        href="/"
        className="m-1 flex flex-col items-center bg-white shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 bg-white-800"
        onClick={(event) => event.preventDefault()}
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={itemImageUrl}
          alt=""
        />
        <div className="flex flex-col justify-between leading-normal px-2">
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-black-900 text-justify">
            {itemName}
          </h5>
          <p className="mb-1 text-sm text-gray-700 dark:text-gray-400 text-justify">
            {itemIngredients}
          </p>
          <p className="flex items-center font-normal text-gray-700 dark:text-gray-400 text-justify">
            {itemPrice}
            <button
              type="button"
              className="add-item-to-cart ml-2"
              onClick={handleClick}
            >
              <BsPlusCircle />
            </button>
          </p>
        </div>
      </a>
    </div>
  );
}

export default FeaturedMenuCardsForRestPage;
