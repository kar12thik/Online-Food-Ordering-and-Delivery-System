import React from 'react'

// Helper function for filtering menu items based on categories selected
function filterMenuItems(filterItem) {
  let restChecked = document.querySelectorAll(".filter-list input.check:checked");      
  console.log(restChecked);
  findCategory(restChecked);

  function findCategory(categoriesChecked) {
      const category_list = []
      const category_reduce = Array.from(categoriesChecked).reduce(function(sum, input) {
          const category = input.getAttribute('value');
          category_list.push(category)
          return category_list;
      }, []);
      console.log(category_list);
      filterItem(category_list);
  }
};

function FoodCategories({itemCategory, filterItem}) {

  return (
    <div>
      <h3 className="mb-4 font-bold text-gray-900 dark:text-white">Categories</h3>

      <ul className="filter-list w-60 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {itemCategory.map((category, id) => {
        return (
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
                <input id={id} onClick={() => filterMenuItems(filterItem)} type="checkbox" value={category} className="check w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                <label htmlFor="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{category.charAt(0).toUpperCase() + category.slice(1)}</label>
            </div>
           </li>
        );
        })}
      </ul>
  </div>
  )
}

export default FoodCategories;
