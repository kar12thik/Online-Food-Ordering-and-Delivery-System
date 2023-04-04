import React from "react";
import { useState } from "react";

function setCategory(category, filter) {
  filter(category);
}

function FoodCategories({ filter, itemCategory }) {
  //console.log(itemCategory);
  const categories = itemCategory;
  console.log(categories);
  const categoryLiElements = categories.map((category) => {
    return (
      <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center pl-3">
          <input
            onClick={() => setCategory(category, filter)}
            id="vue-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            htmlFor="vue-checkbox"
            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {category}
          </label>
        </div>
      </li>
    );
  });
  return (
    <div>
      <h3 className="mb-4 font-bold text-gray-900 dark:text-white">
        Categories
      </h3>

      <ul className="w-60 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {categoryLiElements}
      </ul>
    </div>
  );
}

export default FoodCategories;
