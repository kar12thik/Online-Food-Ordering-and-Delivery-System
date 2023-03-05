import React, { useState } from 'react';

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
            <div className="flex">
                <div className={tab1} onClick={() => handleTabs("tab1")}>
                    <p className="res-details-tab-text">Menu</p>
                </div>
                <div className={tab2} onClick={() => handleTabs("tab2")}>
                    <p className="res-details-tab-text">Reviews</p>
                </div>
                <div className={tab3} onClick={() => handleTabs("tab3")}>
                    <p className="res-details-tab-text">Restaurant Info</p>
                </div>
            </div>
            {tab1Content &&
                < div className="flex menu-section">
                    <div className="col-12 bg-white p-4">
                        <div className="input-group input-group-sm mb-4 mt-2">
                            <input type="text" className="form-control search-menu-input" htmlFor="search-menu" placeholder="Search food item" />
                            <div className="input-group-append">
                                <span className="input-group-text search-menu-text" id="search-menu"></span>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-4 text-warning">Best food items:</h6>
                            {/* {this._renderMenuItemsList()} */}
                            Menu items
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
