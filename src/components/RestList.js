import FeaturedRestCardsForRestPage from "./FeaturedRestCardsForRestPage";
import RestCategories from "./RestCategories";
import React, { useState } from "react";

function filterRest(filterItem) {
    let restChecked = document.querySelectorAll(".filter-list input.check:checked");      
    findCategory(restChecked);

    function findCategory(categoriesChecked) {
        const category_list = []
        Array.from(categoriesChecked).reduce(function(sum, input) {
            const category = input.getAttribute('value');
            category_list.push(category)
        }, []);
        filterItem(category_list);
    }
};

function RestList({dataTestId,item, menuItems, filterItem, setItem}) {
  <></>
  const [navbar, setNavbar] = useState(false);
    return (
        <div className="">
                        <h3 className="justify-center mb-4 font-bold text-gray-900 dark:text-white">Featured Restaurants</h3>
                            <div className="">
                                <div className="filterRest grid sm:w-full md:11/12 lg:w-10/12 grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                                    {item.map((Val) => {
                                        return(
                                        <FeaturedRestCardsForRestPage
                                            restImg={Val.img}
                                            restName={Val.title}
                                            restDish={Val.category}
                                        />
                                );
                            })};
                            </div>
                            </div>
                        </div>
    );
}

export default RestList;
