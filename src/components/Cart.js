import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { orderNow } from "../config/firebase";

function Cart({
  cartItemsList,
  removeCartItem,
  totalPrice,
  userDetails,
  resDetails,
}) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.loggedInUser.loggedIn);

  const HandleConfirmOrderBtn = async () => {
    if (userDetails) {
      if (!userDetails.isRestaurant) {
        if (cartItemsList.length > 0) {
          try {
            await orderNow(cartItemsList, totalPrice, resDetails, userDetails);
            Swal.fire({
              title: "Success",
              text: "Successfully Ordered",
              type: "success",
              confirmButtonColor: "#E18633",
            }).then(() => {
              navigate("/my-orders");
            });
          } catch (error) {
            Swal.fire({
              title: "Error",
              text: error,
              type: "error",
            });
          }
        } else {
          Swal.fire({
            title: "Error",
            text: "You have to select atleast one item",
            type: "error",
          });
        }
      } else {
        Swal.fire({
          title: "Error",
          text: "You are not able to order",
          type: "error",
        });
      }
    } else {
      Swal.fire({
        title: "Error",
        text: "You must be Loged In",
        type: "error",
      }).then(() => {
        //this.props.history.push('/login')
      });
    }
  };

  const renderCartItemsList = () => {
    if (cartItemsList) {
      return Object.keys(cartItemsList).map((val) => {
        return (
          <li className="pb-2 mb-3">
            <div className="flex mb-2 border-b-2">
              <div className="w-2/3 pr-0">
                <p className="mb-0">{cartItemsList[val].itemName}</p>
              </div>
              <div className="w-1/3 pl-0 text-right flex">
                <div className="mb-0 font-bold">
                  <span>${cartItemsList[val].itemPrice}</span>
                </div>
                <div className="ml-5 mb-0" onClick={() => removeCartItem(val)}>
                  <RxCross2 />
                </div>
              </div>
            </div>
          </li>
        );
      });
    }
  };

  return (
    <div>
      <h3 className="mb-4 font-bold text-gray-900 dark:text-white">
        Your Order
      </h3>
      <div className="w-60 min-h-48 p-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {cartItemsList.length > 0 ? (
          <div>
            <div>
              <ul>{renderCartItemsList()}</ul>
            </div>
            <div>
              <div className="flex mb-2">
                <div className="w-2/3 pr-0">
                  <p className="mb-0">Total</p>
                </div>
                <div className="w-1/3 pl-0 text-left">
                  <p className="mb-0 font-bold">${totalPrice}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-green-600 p-3">Cart is empty.</p>
        )}
        <div>
          {isLoggedIn ? (
            <div className="">
              {cartItemsList.length > 0 ? (
                <button
                  type="button"
                  onClick={() => HandleConfirmOrderBtn()}
                  className="btn rounded-lg ml-10 mt-4 text-white bg-orange p-3"
                >
                  CONFIRM ORDER </button>
              ) : (
                <span></span> )}
            </div>
          ) : (
            <div>
              {cartItemsList.length > 0 ? (
                <button disabled>Please <Link to="/login"><a href="/" className="text-blue-500 underline">log in</a></Link> to confirm your order</button>
              ):
              <span></span>} 
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
