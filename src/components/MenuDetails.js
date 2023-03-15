import React, { useState } from "react";
import { MdOutlineRestaurant } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import FeaturedMenuCardsForRestPage from "./FeaturedMenuCardsForRestPage";
import SearchRestOnRestPage from "./SearchRestOnRestPage";
import SearchMenuOnRestDetail from "./SearchMenuOnRestDetail";


function MenuDetails() {
  const [tab1, settab1] = useState("columns-2 text-center bg-white");
  const [tab2, settab2] = useState("columns-2 text-center");
  const [tab3, settab3] = useState("columns-2 text-center");
  const [tab1Content, settab1Content] = useState(true);
  const [tab2Content, settab2Content] = useState(false);
  const [tab3Content, settab3Content] = useState(false);
  const imgUrl = "https://react-quick-food.firebaseapp.com/static/media/listing-logo12.c9102623.png";

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
    <div classname="mr-5">
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="ml-4"
      >
        <div className="mr-20">
          <div className="flex ">
            <div className="tab1 cursor-pointer" onClick={() => handleTabs("tab1")}>
              <p className="res-details-tab-text">
                <button
                  type="button"
                  className="bg-white hover:bg-gray-200 text-black h-12 px-11 mb-0 mr-12"
                >
                  <span>Menu </span>
                  <div className="ml-3">
                    <MdOutlineRestaurant />
                  </div>
                </button>
              </p>
            </div>
            <div className="tab2 cursor-pointer" onClick={() => handleTabs("tab2")}>
              <p className="res-details-tab-text">
                <button
                  type="button"
                  className="bg-white hover:bg-gray-200 text-black h-12 px-9 mx-24">
                  Reviews{" "}
                  <div className="ml-5">
                    <MdReviews />
                  </div>
                </button>
              </p>
            </div>
            <div className="tab3 cursor-pointer" onClick={() => handleTabs("tab3")}>
              <p className="res-details-tab-text">
                <button
                  type="button"
                  className="bg-white hover:bg-gray-200 text-black h-12 px-11 ml-7"
                >
                  Info{" "}
                  <div className="ml-2">
                    <AiFillInfoCircle />
                  </div>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      {tab1Content && (
        <div>
         <div>
         <div className="ml-4">
          <SearchMenuOnRestDetail/>
          </div>
        </div>
          <div className="ml-3">
            <FeaturedMenuCardsForRestPage
              restImg={imgUrl}
              restName="Pavbhaji"
              restDetail="A thick vegetable curry served with a soft bread roll." 
              restPrice="$15"
            />
            <FeaturedMenuCardsForRestPage
              restImg={imgUrl}
              restName="Dosa"
              restDetail="A thin, crispy dish served with chutney and sambar." 
              restPrice="$10"
            />
            <FeaturedMenuCardsForRestPage
              restImg={imgUrl}
              restName="Biryani"
              restDetail="Aromatic and flavorful with a variety of spices." 
              restPrice="$20"
            />
          </div>
        </div>
      )}
      {tab2Content && (
        <div className="row review-section">
          <div className="w-11/12 bg-white p-4 my-2">
            {/* <h5>Customer Reviews For {resDetails.userName}</h5> */}
            <h5>Customer Reviews For Olive Garden</h5>
            <div className="row p-5">
              <div className="col-6 text-right">
                {/* <img alt="Review Icon" src={require("../assets/images/icon-review.png")} /> */}
              </div>
              <div className="col-6 pl-0">
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
          <div className="w-11/12 bg-white p-4 my-2">
            {/* <h5>Overview {resDetails.userName}</h5> */}
            <h5>Overview Olive Garden</h5>
            <p>
              Base prepared fresh daily. Extra toppings are available in choose
              extra Choose you sauce: Go for BBQ sauce or piri piri sauce on
              your pizza base for no extra cost. Choose your cut: Triangular,
              square, fingers or Un cut on any size pizza
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuDetails;
