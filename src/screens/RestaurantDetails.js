import React, { useState } from 'react';


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
                    <div className="w-1/3 pl-0 text-right">
                        <p className="mb-0 font-bold">$12</p>
                    </div>
                </div>
                <div className="flex mb-2 border-b-2">
                    <div className="w-2/3 pr-0">
                        <p className="mb-0">Kabab</p>
                    </div>
                    <div className="w-1/3 pl-0 text-right">
                        <p className="mb-0 font-bold">$10</p>
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
                                        <div className="w-1/3 pl-0 text-right">
                                            <p className="mb-0 font-bold">$22</p>
                                        </div>
                                    </div>
                                </div>
                            </div> : <p className="text-green-600 p-3">Cart is empty.</p> }
                            <div>
                                <button type="button" className="btn rounded-lg ml-10 mt-4 text-white bg-orange p-3">CONFIRM ORDER</button>
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
