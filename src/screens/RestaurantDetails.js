import React, { useState } from 'react';

import { RxCross2 } from "react-icons/rx";


const RestaurantDetails = (props) => {
    const [cartItemsList, setcartItemsList] = useState([]);
    const [totalPrice, settotalPrice] = useState(0);
    const [showCartList, setshowCartList] = useState(false);
    const cartItemsCount = 2;

    const addToCart = (item) => {
        if (item) {
            cartItemsList.push(item);
            settotalPrice(totalPrice + Number(item.itemPrice));
            setcartItemsList(cartItemsList);
            setshowCartList(true);
        }
    }

    const removeCartItem = (itemIndex) => {
        const removedItemPrice = Number(cartItemsList[itemIndex].itemPrice);
        cartItemsList.splice(itemIndex, 1);
        settotalPrice(totalPrice - removedItemPrice);
        setcartItemsList(cartItemsList);
    }

    const renderCartItemsList = () => {
        
        return (
            <li className="pb-2 mb-3">
                <div className="flex mb-2 border-b-2">
                    <div className="w-2/3 pr-0">
                        <p className="mb-0">Chicken burger</p>
                    </div>
                    <div className="w-1/3 pl-0 text-right flex">
                        <div className="mb-0 font-bold"><span>$14</span></div>
                        <div className="ml-5 mb-0">< RxCross2 /></div>
                    </div>
                </div>
                <div className="flex mb-2 border-b-2">
                    <div className="w-2/3 pr-0">
                        <div className="mb-0"><span>Pizza</span></div>
                    </div>
                    <div className="w-1/3 pl-0 text-right flex">
                        <div className="mb-0 font-bold"><span>$10</span></div>
                        <div className="ml-5">< RxCross2 /></div>
                        {/* <p className="mb-0 font-bold"><span className="food-price">RS.{cartItemsList[val].itemPrice}</span><span onClick={() => this.removeCartItem(val)} className="remove-food-item"><FontAwesomeIcon icon="times" /></span></p> */}
                    </div>
                </div>
            </li>
            
        )
            
        // if (cartItemsList) {
        //     return Object.keys(cartItemsList).map((val) => {
        //         return (
        //             <li className="food-item border-bottom pb-2 mb-3" key={val}>
        //                 <div className="flex">
        //                     <div className="col-8 pr-0">
        //                         <p className="mb-0">{cartItemsList[val].itemTitle}</p>
        //                     </div>
        //                     <div className="col-4 pl-0 text-right">
        //                         <p className="mb-0"><span className="food-price">RS.{cartItemsList[val].itemPrice}</span><span onClick={() => this.removeCartItem(val)} className="remove-food-item"><FontAwesomeIcon icon="times" /></span></p>
        //                     </div>
        //                 </div>
        //             </li>
        //         )
        //     })
        // }
    }

    return (
    <div>
        <div className="container-fluid h-72 bg-cover bg-restaurant-cover">
            <div>
                <div className="container p-20 mx-0">
                    <div className="container">
                        <div className="flex">
                            <div className="items-center col-span-2">
                                <img className="w-60 scale-75" alt="Food" src={require('../assets/images/rest_image.png')} />
                            </div>
                            <div className="pt-16">
                                <h1 className="text-2xl text-white font-semibold">Olive Garden</h1>
                                <p className="text-white">Food, Drinks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid bg-slate-200">
            <div className="container mx-auto">
                <div className="flex mx-auto flex-col md:flex-row lg:flex-row sm:space-x-0 md:space-x-4 lg:space-x-4 pt-10 pl-20 pb-10 ml-10">
                    <div className="w-1/3 justify-center">
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
                    </div>
                    <div className="w-1/3 justify-center">
                        Menu Details Section
                    </div>
                    <div className="w-1/3 justify-center">
                        <h3 className="mb-4 font-bold text-gray-900 dark:text-white">Your Order</h3>
                        <div className="w-60 h-48 p-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        {/* {cartItemsList.length > 0 ? */}
                        {cartItemsCount > 0 ? 
                            <div>
                                <div>
                                    <ul>
                                        {renderCartItemsList()}
                                    </ul>
                                </div>
                                <div>
                                    <div className="flex mb-2">
                                        <div className="w-2/3 pr-0">
                                            <p className="mb-0">Total</p>
                                        </div>
                                        <div className="w-1/3 pl-0 text-left">
                                            <p className="mb-0 font-bold">$24</p>
                                        </div>
                                    </div>
                                </div>
                            </div> : <p className="text-green-600 p-3">Cart is empty.</p> }
                            <div>
                            {cartItemsCount !== 0 ? <button type="button" className="btn rounded-lg ml-10 mt-4 text-white bg-orange p-3">CONFIRM ORDER</button> : null}
                                {/* <button type="button" className="btn rounded-lg ml-10 mt-4 text-white bg-orange p-3">CONFIRM ORDER</button> */}
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
