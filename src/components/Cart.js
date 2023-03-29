import React from 'react'
import {useNavigate} from 'react-router-dom';
import {orderNow} from "../config/firebase";
import {RxCross2} from "react-icons/rx";
import Swal from 'sweetalert2'

function Cart({cartItemsList, currentTotalPrice, removeCart}) {
    const navigate = useNavigate();
    const cartItemsCount = cartItemsList.length;
    // const cartItemsList = ['Chicken burger', 'Pizza'];
    const totalPrice = 24;
    const userDetails = {
        isLogin: true,
        isRestaurant: false,
        typeOfFood: [],
        userAge: "22",
        userCity: "Chennai",
        userCountry: "Indiaa",
        userEmail: "user13@gmail.com",
        userGender: "Male",
        userName: "Karthik",
        userPassword: "Hotel@123.",
        userProfileImageUrl: "https://firebasestorage.googleapis.com/v0/b/ofods-app.appspot.com/o/userProfileImage%2F6fFYYdWogiVFku7SkbYGuWFexbg2%2Fhuddle.jpg?alt=media&token=84fe7f34-5e4b-4973-ba41-6d055decce75",
        userUid: "6fFYYdWogiVFku7SkbYGuWFexbg2"
    }

    const resDetails = {
        id: "7VFRuJ4qV8MEuu5NjrguFWiuW9F2",
        isRestaurant: true,
        typeOfFood: ['Apple Juice', 'Beef Roast', 'Cheese Burger'],
        userAge: "55",
        userCity: "Waterloo",
        userCountry: "Canada",
        userEmail: "hotelone@gmail.com",
        userGender: "Male",
        userName: "Hotel One",
        userPassword: "Hotel@123.",
        userProfileImageUrl: "https://firebasestorage.googleapis.com/v0/b/ofods-app.appspot.com/o/userProfileImage%2F7VFRuJ4qV8MEuu5NjrguFWiuW9F2%2Fnav.png?alt=media&token=b538b626-6c2c-4ec5-987f-69bec14f2a1e",
        userUid: "7VFRuJ4qV8MEuu5NjrguFWiuW9F2"
    }

    function HandleConfirmOrderBtn() {
        if (userDetails) {
            if (!userDetails.isRestaurant) {
                if (cartItemsList.length > 0) {
                    try {
                        const orderNowReturn = orderNow(cartItemsList, totalPrice, resDetails, userDetails);
                        console.log(orderNowReturn);
                        Swal.fire({
                            title: 'Success',
                            text: 'Successfully Ordered',
                            type: 'success',
                            confirmButtonColor: '#E18633'
                        }).then(() => {
                            navigate("/orders");
                        })
                    } catch (error) {
                        // console.log(" Error in confirm order => ", error)
                        Swal.fire({
                            title: 'Error',
                            text: error,
                            type: 'error',
                        })
                    }
                } else {
                    console.log("You have to select atleast one item")
                    Swal.fire({
                        title: 'Error',
                        text: 'You have to select atleast one item',
                        type: 'error',
                    })
                }
            } else {
                // console.log("You are not able to order")
                Swal.fire({
                    title: 'Error',
                    text: 'You are not able to order',
                    type: 'error',
                })
            }
        } else {
            // console.log("You must be Loged In")
            Swal.fire({
                title: 'Error',
                text: 'You must be Loged In',
                type: 'error',
            }).then(() => {
                //this.props.history.push('/login')
            })
        }
    }

    function removeItem(item) {
        removeCart(item);
    }

    const renderCartItemsList = () => {
        return (
            <li className="pb-2 mb-3">
                {
                    cartItemsList.map((item) => {
                        return (
                            <div className="flex mb-2 border-b-2">
                                <div className="w-2/3 pr-0">
                                    <p className="mb-0">{item.itemTitle}</p>
                                </div>
                                <div className="w-1/3 pl-0 text-right flex">
                                    <div className="mb-0 font-bold"><span>${item.itemPrice}</span></div>
                                    <button type="button" className="ml-5 mb-0" onClick={() => removeItem(item)}>< RxCross2/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                {/*<div className="flex mb-2 border-b-2">*/}
                {/*    <div className="w-2/3 pr-0">*/}
                {/*        <p className="mb-0">Chicken burger</p>*/}
                {/*    </div>*/}
                {/*    <div className="w-1/3 pl-0 text-right flex">*/}
                {/*        <div className="mb-0 font-bold"><span>$14</span></div>*/}
                {/*        <div className="ml-5 mb-0">< RxCross2 /></div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="flex mb-2 border-b-2">*/}
                {/*    <div className="w-2/3 pr-0">*/}
                {/*        <div className="mb-0"><span>Pizza</span></div>*/}
                {/*    </div>*/}
                {/*    <div className="w-1/3 pl-0 text-right flex">*/}
                {/*        <div className="mb-0 font-bold"><span>$10</span></div>*/}
                {/*        <div className="ml-5">< RxCross2 /></div>*/}
                {/*        /!* <p className="mb-0 font-bold"><span className="food-price">RS.{cartItemsList[val].itemPrice}</span><span onClick={() => this.removeCartItem(val)} className="remove-food-item"><FontAwesomeIcon icon="times" /></span></p> *!/*/}
                {/*    </div>*/}
                {/*</div>*/}
            </li>

        )

    }

    return (
        <div>
            <h3 className="mb-4 font-bold text-gray-900 dark:text-white">Your Order</h3>
            <div
                className="w-60 h-auto p-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
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
                                    <p className="mb-0 font-bold">${currentTotalPrice}</p>
                                </div>
                            </div>
                        </div>
                    </div> : <p className="text-green-600 p-3">Cart is empty.</p>}
                <div>
                    {cartItemsCount !== 0 ? <button type="button" onClick={() => HandleConfirmOrderBtn()}
                                                    className="btn rounded-lg ml-10 mt-4 text-white bg-orange p-3">CONFIRM
                        ORDER</button> : null}
                    {/* <button type="button" className="btn rounded-lg ml-10 mt-4 text-white bg-orange p-3">CONFIRM ORDER</button> */}
                </div>
            </div>
        </div>
    )
}

export default Cart
