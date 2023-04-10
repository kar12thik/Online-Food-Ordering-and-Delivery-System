import React, { useState } from "react";

import { useSelector } from "react-redux";

import SingleUserOrderDetail from "./SingleUserOrderDetail";

function UserOrderDetails() {
  const [tab1Content, settab1Content] = useState(true);
  const [tab2Content, settab2Content] = useState(false);
  const [tab3Content, settab3Content] = useState(false);
  const status = ["PENDING", "IN PROGRESS", "DELIVERED"];

  let ordersList = useSelector((state) => state.myOrders.orders);
  let orderRequests = useSelector((state) => state.orderRequests.orders);
  const isRestaurant = useSelector((state) => state.loggedInUser.isRestaurant);

  if (isRestaurant) {
    ordersList = orderRequests;
  }

  let pendingOrders = ordersList.filter((o) => o.status === "PENDING");
  let inProgressOrders = ordersList.filter((o) => o.status === "IN PROGRESS");
  let deliveredOrders = ordersList.filter((o) => o.status === "DELIVERED");

  function handleTabs(e) {
    if (e === "tab1") {
      settab1Content(true);
      settab2Content(false);
      settab3Content(false);
    } else if (e === "tab2") {
      settab1Content(false);
      settab2Content(true);
      settab3Content(false);
    } else if (e === "tab3") {
      settab1Content(false);
      settab2Content(false);
      settab3Content(true);
    }
  }

  return (
    <div className="w-1/3 mx-auto" data-testid="user-order-details">
      {/* Tabs */}
      <div className="w-full mr-6">
        <ul className="w-full flex-col md:flex-row lg: flex justify item-center sm:space-x-0 md:space-x-1 lg:flex space-x-1 justify-between mb-1 pt-10">
          <div
            className="tab1 cursor-pointer"
            onClick={() => handleTabs("tab1")}
          >
            <button
              type="button"
              className={`w-full flex mx-auto ${
                tab1Content ? "bg-orange" : "bg-white"
              }   text-black h-12 px-11  justify-center items-center rounded-md`}
            >
              <div className="mr-1">
                <img
                  src="https://img.icons8.com/fluency-systems-regular/32/null/hourglass--v1.png"
                  alt="Pending"
                />
              </div>
              <span>Pending</span>
            </button>
          </div>
          <div
            className="tab2 cursor-pointer"
            onClick={() => handleTabs("tab2")}
          >
            <button
              type="button"
              className={`w-full flex mx-auto ${
                tab2Content ? "bg-orange" : "bg-white"
              }   text-black h-12 px-11  justify-center items-center rounded-md`}
            >
              <div className="mr-1">
                <img
                  src="https://img.icons8.com/ios-filled/32/null/in-progress.png"
                  alt="In progress"
                />
              </div>
              <span>In Progress </span>
            </button>
          </div>
          <div
            className="tab3 cursor-pointer"
            onClick={() => handleTabs("tab3")}
          >
            <button
              type="button"
              className={`w-full flex mx-auto ${
                tab3Content ? "bg-orange" : "bg-white"
              }   text-black h-12 px-11  justify-center items-center rounded-md`}
            >
              <div className="mr-1">
                <img
                  src="https://img.icons8.com/material-rounded/32/null/checked-truck.png"
                  alt="Delivered"
                />
              </div>
              <span>Delivered </span>
            </button>
          </div>
        </ul>

        {/* List */}
        {tab1Content && (
          <div className="order-created w-full flex flex-col space-x-1 justify-between mb-4 bg-white p-4 my-2" data-testid="send-to-inprogress">
            {pendingOrders.length !== 0 ? (
              pendingOrders.map((order) => {
                return (
                  <SingleUserOrderDetail
                    orderId={order.id}
                    userUid={order.userUid}
                    restaurant_name={isRestaurant ? (order.userName):(order.restName)}
                    order_status={order.status}
                    total_price={order.totalPrice}
                    orderItemList={order.itemsList}
                    order_status_color="text-red-500"
                    nextaction={isRestaurant ? "Send to In Progress" : ""}
                    status={isRestaurant ? status[1] : ""}
                  />
                );
              })
            ) : (
              <h1 className="ml-1/2 text-xl font-black">No Pending Orders</h1>
            )}
          </div>
        )}

        {tab2Content && (
          <div className="order-progress flex flex-col space-x-1 justify-between mb-4 bg-white p-4 my-2" data-testid="send-to-delivered">
            {inProgressOrders.length !== 0 ? (
              inProgressOrders.map((order) => {
                return (
                  <SingleUserOrderDetail
                    orderId={order.id}
                    userUid={order.userUid}
                    restaurant_name={isRestaurant ? (order.userName):(order.restName)}
                    order_status={order.status}
                    total_price={order.totalPrice}
                    orderItemList={order.itemsList}
                    order_status_color="text-yellow-500"
                    nextaction={isRestaurant ? "Send to Delivered" : ""}
                    status={isRestaurant ? status[2] : ""}
                  />
                );
              })
            ) : (
              <h1 className="text-xl font-black">No In Progress Orders</h1>
            )}
          </div>
        )}
        {tab3Content && (
          <div className="order-delivered flex flex-col space-x-1 justify-between mb-4 bg-white p-4 my-2" data-testid="delivered-status">
            {deliveredOrders.length !== 0 ? (
              deliveredOrders.map((order) => {
                return (
                  <SingleUserOrderDetail
                    orderId={order.id}
                    userUid={order.userUid}
                    restaurant_name={isRestaurant ? (order.userName):(order.restName)}
                    order_status={order.status}
                    total_price={order.totalPrice}
                    orderItemList={order.itemsList}
                    order_status_color="text-green-500"
                    nextaction=""
                    status=""
                  />
                );
              })
            ) : (
              <h1 className="text-xl font-black">No Delivered Orders</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserOrderDetails;
