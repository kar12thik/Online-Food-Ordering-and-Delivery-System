import React, { useState } from "react";

function UserOrderDetails() {
//   const [tab1, settab1] = useState("columns-2 text-center bg-white");
//   const [tab2, settab2] = useState("columns-2 text-center");
//   const [tab3, settab3] = useState("columns-2 text-center");
  const [tab1Content, settab1Content] = useState(true);
  const [tab2Content, settab2Content] = useState(false);
  const [tab3Content, settab3Content] = useState(false);

  function handleTabs(e) {
    if (e === "tab1") {
    //   settab1("columns-2 text-center bg-white");
    //   settab2("columns-2 text-center");
    //   settab3("columns-2 text-center");
      settab1Content(true);
      settab2Content(false);
      settab3Content(false);
    } else if (e === "tab2") {
    //   settab1("columns-2 text-center");
    //   settab2("columns-2 text-center bg-white");
    //   settab3("columns-2 text-center");
      settab1Content(false);
      settab2Content(true);
      settab3Content(false);
    } else if (e === "tab3") {
    //   settab1("columns-2 text-center");
    //   settab2("columns-2 text-center");
    //   settab3("columns-2 text-center bg-white");
      settab1Content(false);
      settab2Content(false);
      settab3Content(true);
    }
  }

  return (
    <div className="w-full mr-24">
      {/* Tabs */}
      <div className="w-full mr-6">
        <ul className="w-full flex-col md:flex-row lg: flex justify item-center sm:space-x-0 md:space-x-1 lg:flex space-x-1 justify-between mb-1 pt-10">
          <div
            className="tab1 cursor-pointer"
            onClick={() => handleTabs("tab1")}
          >
            <button
              type="button"
              className="w-full flex mx-auto bg-white hover:bg-gray-200 text-black h-12 px-11  justify-center items-center"
            >
              <span>Menu </span>
              <div className="ml-1">{/* <MdOutlineRestaurant /> */}</div>
            </button>
          </div>
          <div
            className="tab2 cursor-pointer"
            onClick={() => handleTabs("tab2")}
          >
            <button
              type="button"
              className="w-full flex mx-auto bg-white hover:bg-gray-200 text-black h-12 px-11  justify-center items-center"
            >
              <span>Reviews </span>
              <div className="ml-1">{/* <MdOutlineRateReview /> */}</div>
            </button>
          </div>
          <div
            className="tab3 cursor-pointer"
            onClick={() => handleTabs("tab3")}
          >
            <button
              type="button"
              className="w-full flex mx-auto bg-white hover:bg-gray-200 text-black h-12 px-11  justify-center items-center"
            >
              <span>Info </span>
              <div className="ml-1">{/* <AiFillInfoCircle /> */}</div>
            </button>
          </div>
        </ul>

        {/* List */}
        {tab1Content && (
          <div className="">
            <h1>In Progress</h1>
            {/* <SearchFoodOnRestDetailsPage />

            <div className="">
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
              /> */}
            {/* </div> */}
          </div>
        )}
        {tab2Content && (
          <div className="row review-section">
            <div className="w-full flex space-x-1 justify-between mb-4 bg-white p-4 my-2">
              {/* <h5>Customer Reviews For {resDetails.userName}</h5> */}

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
              {/* <h5>Overview {resDetails.userName}</h5> */}

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

export default UserOrderDetails;
