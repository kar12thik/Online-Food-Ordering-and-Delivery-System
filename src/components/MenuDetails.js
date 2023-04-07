import React, { useState } from "react";
import { MdOutlineRestaurant } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import FeaturedMenuCardsForRestPage from "./FeaturedMenuCardsForRestPage";
import SearchFoodOnRestDetailsPage from "./SearchFoodOnRestDetailsPage";

function MenuDetails({ items, handleSearchBar, placeholder, addToCart }) {
  const [tab1, settab1] = useState("columns-2 text-center bg-white");
  const [tab2, settab2] = useState("columns-2 text-center");
  const [tab3, settab3] = useState("columns-2 text-center");
  const [tab1Content, settab1Content] = useState(true);
  const [tab2Content, settab2Content] = useState(false);
  const [tab3Content, settab3Content] = useState(false);
  const imgUrl =
    "https://react-quick-food.firebaseapp.com/static/media/listing-logo12.c9102623.png";

  function handleTabs(e) {
    if (e === "tab1") {
      settab1("columns-2 text-center bg-white");
      settab2("columns-2 text-center");
      settab3("columns-2 text-center");
      settab1Content(true);
      settab2Content(false);
      settab3Content(false);
    } else if (e === "tab2") {
      settab1("columns-2 text-center");
      settab2("columns-2 text-center bg-white");
      settab3("columns-2 text-center");
      settab1Content(false);
      settab2Content(true);
      settab3Content(false);
    } else if (e === "tab3") {
      settab1("columns-2 text-center");
      settab2("columns-2 text-center");
      settab3("columns-2 text-center bg-white");
      settab1Content(false);
      settab2Content(false);
      settab3Content(true);
    }
  }

  return (
    <div className="w-full mr-24">
      {/* Tabs */}
      <div className="w-full mr-6">
        <ul className="w-full flex-col md:flex-row lg: flex justify item-center sm:space-x-0 justify-between md:space-x-1 lg:flex space-x-1 justify-between mb-1 pt-10">
          <div
            className="tab1 cursor-pointer"
            onClick={() => handleTabs("tab1")}
          >
            <button
              type="button"
              className="w-full flex mx-auto bg-white hover:bg-gray-200 text-black h-12 px-11 flex justify-center items-center"
            >
              <span>Menu </span>
              <div className="ml-1">
                <MdOutlineRestaurant />
              </div>
            </button>
          </div>
          <div
            className="tab2 cursor-pointer"
            onClick={() => handleTabs("tab2")}
          >
            <button
              type="button"
              className="w-full flex mx-auto bg-white hover:bg-gray-200 text-black h-12 px-11 flex justify-center items-center"
            >
              <span>Reviews </span>
              <div className="ml-1">
                <MdOutlineRateReview />
              </div>
            </button>
          </div>
          <div
            className="tab3 cursor-pointer"
            onClick={() => handleTabs("tab3")}
          >
            <button
              type="button"
              className="w-full flex mx-auto bg-white hover:bg-gray-200 text-black h-12 px-11 flex justify-center items-center"
            >
              <span>Info </span>
              <div className="ml-1">
                <AiFillInfoCircle />
              </div>
            </button>
          </div>
        </ul>

        {/* List */}
        {tab1Content && (
          <div className="">
            <SearchFoodOnRestDetailsPage
              handleSearchBar={handleSearchBar}
              placeholder={placeholder}
            />
            {items.length > 0 ? (
              <div className="">
                {items.map((Val) => {
                  return <FeaturedMenuCardsForRestPage restVal={Val} addToCart={addToCart}/>;
                })}
              </div>
            ) : (
              <div className="flex flex-col item-center h-screen">
                <p className="text-xl text-gray-600">
                  Sorry, we couldn't find any menu items matching your search.
                </p>
              </div>
            )}
          </div>
        )}
        {tab2Content && (
          <div className="row review-section">
            <div className="w-full flex space-x-1 justify-between mb-4 bg-white p-4 my-2">
              <div className="row p-5">
                <div className="pl-0">
                  <p className="mb-0">
                    <strong>Write your own reviews</strong>
                  </p>
                  <small className="text-danger">
                    Only customers can write reviews
                  </small>
                </div>
              </div>
            </div>
          </div>
        )}
        {tab3Content && (
          <div className="row info-section">
            <div className="flex space-x-1 justify-between mb-4 bg-white p-4 my-2">
              <div className="row p-5">
                <div className="text-sm md:text-base">
                  <p className="mb-4">
                    Base prepared fresh daily. Extra toppings are available in
                    choose extra Choose your sauce: Go for BBQ sauce or piri
                    piri sauce on your pizza base for no extra cost. Choose your
                    cut: Triangular, square, fingers or Un cut on any size pizza
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuDetails;
