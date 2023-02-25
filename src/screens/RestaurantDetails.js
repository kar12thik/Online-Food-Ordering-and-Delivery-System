import React from 'react'

function RestaurantDetails() {
  return (
    <div>
        <div className="container-fluid">
            <div>
                <div className="container px-0 mx-0">
                    <div className="container">
                        <div className="flex">
                            <div className="items-center col-span-2">
                                <img className="w-60" alt="Food" src={require('../icons/rest_image.png')} />
                            </div>
                            <div className="pt-16">
                                <h1 className="text-2xl font-semibold">Olive Garden</h1>
                                <p className="">Food, Drinks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid bg-slate-200">
            <div className="container">
                <div className="flex pt-10 pl-20 pb-10 ml-10">
                    <div className="w-1/3 justify-center">
                        <div>
                            <h3 class="mb-4 font-bold text-gray-900 dark:text-white">Categories</h3>
                            <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center pl-3">
                                        <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chicken</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center pl-3">
                                        <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label for="react-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Burgers</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center pl-3">
                                        <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label for="angular-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pizza</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center pl-3">
                                        <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label for="laravel-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sauces</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/3 justify-center">
                        Menu Details Section
                    </div>
                    <div className="w-1/3 justify-center">
                        <h3 class="mb-4 font-bold text-gray-900 dark:text-white">Your Order</h3>
                        <div className="w-60 h-32 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <p className="text-green-600 p-3">Cart is empty.</p>
                            <div>
                                <button type="button" className="btn ml-12 mt-4 text-white bg-orange p-3">CONFIRM ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantDetails;
