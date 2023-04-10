import React from "react";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { logsRef } from "../config/firebase";
import * as Sentry from "@sentry/react";

function handleSendToInProgressBtn(userUid, orderId, restaurantUid, status) {
  firebase
    .firestore()
    .collection("users")
    .doc(restaurantUid)
    .collection("orderRequest")
    .doc(orderId)
    .update({
      status: status,
    })
    .then(() => {
      logsRef.push({
        message: `Order ${orderId} - ${status}!`,
        userId: userUid,
        restaurantId: restaurantUid,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
      });
      Sentry.captureMessage({
        message: `Order ${orderId} - ${status}!`,
        userId: userUid,
        restaurantId: restaurantUid,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
      });
      firebase
        .firestore()
        .collection("users")
        .doc(userUid)
        .collection("myOrder")
        .doc(orderId)
        .update({
          status: status,
        })
        .then(() => {
          logsRef.push({
            message: `Order ${orderId} - ${status}!`,
            userId: userUid,
            restaurantId: restaurantUid,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
          });
          Sentry.captureMessage({
            message: `Order ${orderId} - ${status}!`,
            userId: userUid,
            restaurantId: restaurantUid,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
          });
        });
    });
}

export default function SingleUserOrderDetail({
  orderId,
  userUid,
  order_status,
  order_status_color,
  restaurant_name,
  total_price,
  orderItemList,
  nextaction,
  status,
}) {
  const restaurantUid = useSelector((state) => state.loggedInUser.userId);
  return (
    <div className="order-item" data-testid="single-user-details">
      <div className="flex">
        <h1 className="text-lg font-black" data-testid="rest_name">
          {restaurant_name}
        </h1>
        <h1
          className={`ml-auto uppercase font-bold ${order_status_color}`}
          data-testid="order_status"
        >
          {order_status}
        </h1>
      </div>

      {/* Single order list Card */}
      {orderItemList.map((item) => {
        return (
          <div
            className="mt-6 w-full h-16 flex"
            data-testid="single-user-order-details"
          >
            <div className="w-24 h-24 ml-0 p-1">
              <img src={item.itemImageUrl} alt="items" />
            </div>
            <div className="flex flex-col ml-8">
              <span className="text-lg font-black">{item.itemName}</span>
              <span className="">{item.itemIngredients}</span>
            </div>
            <div className="ml-auto">${item.itemPrice}</div>
          </div>
        );
      })}

      <div className="mt-16 w-full my-2 flex">
        {status === "" ? (
          <div></div>
        ) : (
          <button
            type="button"
            className="order-button ml-2 rounded-lg bg-orange p-2.5 text-sm font-medium text-black"
            onClick={() =>
              handleSendToInProgressBtn(userUid, orderId, restaurantUid, status)
            }
          >
            {nextaction}
          </button>
        )}
        <div className="ml-auto">Total :${total_price}</div>
      </div>

      {/* Divider */}
      <div className="relative flex px-5 py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
    </div>
  );
}
