import FeaturedRestCardsForRestPage from "./FeaturedRestCardsForRestPage";
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
        <div className="container-fluid bg-slate-200">
                <div className="">
                    <div className="w-full flex mx-auto flex-col md:flex-row lg:flex-row sm:space-x-0 md:space-x-4 lg:space-x-4 pt-10 pb-10">
                    <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        <div className="sticky top-0">
                                        <h3 className="mb-4 font-bold text-gray-900">Categories</h3>
                                        <ul className="w-60 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div className="flex items-center pl-3">
                                                    <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                    <label htmlFor="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chicken</label>
                                                </div>
                                            </li>
                                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div className="flex items-center pl-3">
                                                    <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                    <label htmlFor="react-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Burgers</label>
                                                </div>
                                            </li>
                                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div className="flex items-center pl-3">
                                                    <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                    <label htmlFor="angular-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pizza</label>
                                                </div>
                                            </li>
                                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div className="flex items-center pl-3">
                                                    <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                    <label htmlFor="laravel-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sauces</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="black"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        <div className={`w-1/3 justify-center md:block ${navbar ? "block" : "hidden" }`}>
                            <div className="sticky top-0">
                                <h3 className="mb-4 font-bold text-gray-900">Categories</h3>
                                <ul className="filter-list w-60 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                {menuItems.map((Val, id) => {
                                    return(
                                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                        <div className="flex items-center pl-3">
                                            <input id={id} onClick={() => filterRest(filterItem)} type="checkbox" value={Val} className="check w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" rel="chicken"/>
                                            <label htmlFor="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{Val}</label>
                                        </div>
                                    </li>
                                    );
                                })}
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-full lg:w-2/3 justify-center">
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
                    </div>
                </div>
            </div>
    );
}

export default RestList;
