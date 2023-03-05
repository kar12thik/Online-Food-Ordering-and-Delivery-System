import React from 'react'
import { RxCross2 } from "react-icons/rx";

function Cart() {

    const cartItemsCount = 2;

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
    )
}

export default Cart
