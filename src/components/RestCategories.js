import React from "react";

// Helper function for filtering restaurants based on categories selected
function filterRest(filterItem) {
    let restChecked = document.querySelectorAll(".filter-list input.check:checked");      
    findCategory(restChecked);

    function findCategory(categoriesChecked) {
        const category_list = []
        const category_reduce = Array.from(categoriesChecked).reduce(function(sum, input) {
            const category = input.getAttribute('value');
            category_list.push(category)
            return category_list;
        }, []);
        filterItem(category_list);
    }
};

function RestCategories({menuItems, filterItem, categorybar, setCategorybar}) {
    return (
        <div>
            <div className="md:hidden lg:hidden">
                <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setCategorybar(!categorybar)}
                >
                {categorybar ? (
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
            <div className={`${categorybar ? "block" : "hidden" } lg:block md:block`}>
                <div className="">
                    <h3 className="mb-4 font-bold text-gray-900">Categories</h3>
                    <ul className="filter-list w-60 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        {menuItems.map((Val, id) => {
                        return(
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id={id} onClick={() => filterRest(filterItem)} type="checkbox" value={Val} className="check w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" rel="chicken"/>
                                    <label htmlFor="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{Val.charAt(0).toUpperCase() + Val.slice(1)}</label>
                                </div>
                            </li>
                        );
                        })}
                    </ul>
                </div>
            </div>
            </div>
    );
}

export default RestCategories;
