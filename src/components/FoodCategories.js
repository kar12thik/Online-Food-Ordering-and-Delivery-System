import React from 'react'

function FoodCategories() {
  return (
    <div>
      <h3 className="mb-4 font-bold text-gray-900 dark:text-white">Categories</h3>
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
  )
}

export default FoodCategories;
