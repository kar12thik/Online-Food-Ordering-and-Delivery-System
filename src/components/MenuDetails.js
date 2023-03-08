import React, { useState } from 'react';
import { MdOutlineRestaurant } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

function MenuDetails() {
    const [tab1, settab1] = useState("columns-2 text-center bg-white");
    const [tab2, settab2] = useState("columns-2 text-center");
    const [tab3, settab3] = useState("columns-2 text-center");
    const [tab1Content, settab1Content] = useState(true);
    const [tab2Content, settab2Content] = useState(false);
    const [tab3Content, settab3Content] = useState(false);

    function handleTabs(e) {
        if (e === "tab1") {
            settab1("columns-2 text-center bg-white");
            settab2("columns-2 text-center");
            settab3("columns-2 text-center");
            settab1Content(true);
            settab2Content(false);
            settab3Content(false);
        } 
        else if (e === "tab2") {
            settab1("columns-2 text-center");
            settab2("columns-2 text-center bg-white");
            settab3("columns-2 text-center");
            settab1Content(false);
            settab2Content(true);
            settab3Content(false);
        } 
        else if (e === "tab3") {
            settab1("columns-2 text-center");
            settab2("columns-2 text-center");
            settab3("columns-2 text-center bg-white");
            settab1Content(false);
            settab2Content(false);
            settab3Content(true);
        }
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="mr-20">
            <div class="flex ">
                <div class="tab1 cursor-pointer" onClick={() => handleTabs("tab1")}>
                    <p class="res-details-tab-text">
                        <button type="button" className="bg-white hover:bg-gray-200 text-black h-12 px-11 mb-0 mr-10">
                        <span>Menu </span><div class="ml-3"><MdOutlineRestaurant/></div> 
                        </button>
                    </p>
                </div>
                <div class="tab2 cursor-pointer" onClick={() => handleTabs("tab2")}>
                    <p class="res-details-tab-text">
                        <button type="button" className="bg-white hover:bg-gray-200 text-black h-12 px-9 mx-24">
                            Reviews <div className="ml-5"><MdReviews/></div>
                        </button>
                    </p>
                </div>
                <div class="tab3 cursor-pointer" onClick={() => handleTabs("tab3")}>
                    <p class="res-details-tab-text">
                    <button type="button" className="bg-white hover:bg-gray-200 text-black h-12 px-11">
                        Info <div className="ml-2"><AiFillInfoCircle/></div>
                    </button>
                    </p>
                </div>
            </div>    
            </div>
            </div>
            {tab1Content &&
                <div class="col-12 bg-white p-4 mr-2 pr-0 h-232 w-100 pl-17 ml-0">
                <div class="flex items-center mb-2 mt-2">
                    
                        <input type="text" className="form-control search-menu-input" htmlFor="search-menu" placeholder="Search food item" />
                        <div className="ml-2"><BiSearch/></div>
                        <div className="input-group-append">
                            <span className="input-group-text search-menu-text" id="search-menu"></span>
                        </div>
                    
                    <div>
                       
                    </div>
                </div>
            </div> 
                         
            }
            {tab2Content && <div className="row review-section">
                <div className="col-12 bg-white p-4">
                    {/* <h5>Customer Reviews For {resDetails.userName}</h5> */}
                    <h5>Customer Reviews For Olive Garden</h5>
                    <div className="row p-5">
                        <div className="col-6 text-right">
                            {/* <img alt="Review Icon" src={require("../assets/images/icon-review.png")} /> */}
                        </div>
                        <div className="col-6 pl-0">
                            <p className="mb-0"><strong>Write your own reviews</strong></p>
                            <small className="text-danger">Only customers can write reviews</small>
                        </div>
                    </div>
                </div>
            </div>
            }
            {tab3Content && <div className="row info-section">
                <div className="col-12 bg-white p-4">
                    {/* <h5>Overview {resDetails.userName}</h5> */}
                    <h5>Overview Olive Garden</h5>
                    <p>Base prepared fresh daily. Extra toppings are available in choose extra
                        Choose you sauce: Go for BBQ sauce or piri piri sauce on your pizza base for no extra cost.
                        Choose your cut: Triangular, square, fingers or Un cut on any size pizza</p>
                </div>
            </div>
            }
        </div>
    )
}

export default MenuDetails;