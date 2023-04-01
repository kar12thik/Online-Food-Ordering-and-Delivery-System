import React, { useRef } from 'react';
import firebase from '../config/firebase';
import { useSelector } from "react-redux";
import emailjs from '@emailjs/browser';

const sendEmail = (templateParams) => {
  //e.preventDefault();
  console.log("Inside sendEmail()");
  console.log("templateParams =>", templateParams);
  emailjs.send("service_0ftj823","template_4ebycmf",templateParams, 'EnqUEx063AGldd82c');

};

function handleSendToInProgressBtn(userUid, orderId, restaurantUid, status, restaurant_name, nextaction) {
  console.log("user id:", userUid);
  console.log("order id:", orderId);
  console.log("restaurant id:", restaurantUid);
  var templateParams = {
    userName: userUid,
    userEmail: 'mareenafr@gmail.com',
    restaurantName: restaurant_name,
    orderId: orderId,
    nextaction: nextaction
  };
  firebase.firestore().collection('users').doc(restaurantUid).collection('orderRequest').doc(orderId).update({
      status: status,
  }).then(() => {
      console.log("First Seccussfully send to IN PROGRESS");
      sendEmail(templateParams);
      firebase.firestore().collection('users').doc(userUid).collection('myOrder').doc(orderId).update({
          status: status,
      }).then(()=>{
          console.log("Second Seccussfully send to IN PROGRESS")
      })
  })
};

export default function SingleUserOrderDetail({
  orderId,
  userUid,
  order_status,
  order_status_color,
  restaurant_name,
  total_price,
  orderItemList,
  nextaction,
  status
}) {
  const restaurantUid = useSelector((state) => state.loggedInUser.userId);
  const form = useRef();

  return (
    <div>
      <div className="flex">
        <h1 className="text-lg font-black">{restaurant_name}</h1>
        <h1 className={`ml-auto uppercase font-bold ${order_status_color}`}>
          {order_status}
        </h1>
      </div>

      {/* Single order list Card */}
      {orderItemList.map((item) => {
        console.log(item);
        return (
          <div className="mt-6 w-full h-16 flex">
            <div className="w-24 h-24 ml-0 p-1">
              <img src={item.itemImageUrl} alt="items" />
            </div>
            <div className="flex flex-col ml-8">
              <span className="text-lg font-black">{item.itemTitle}</span>{" "}
              <span className="">{item.itemIngredients}</span>
            </div>
            <div className="ml-auto">${item.itemPrice}</div>
          </div>
        );
      })}

      <div className="mt-16 w-full my-2 flex">
        {
          (status === "") ? 
          (<div></div>) : 
          (
            <button type="button" className="ml-2 rounded-lg bg-orange p-2.5 text-sm font-medium text-black" onClick={() => handleSendToInProgressBtn(userUid, orderId, restaurantUid, status, restaurant_name, nextaction )}>{nextaction}</button>
          )
        }
        <div className="ml-auto">Total :${total_price}</div>
      </div>

      {/* Divider */}
      <div class="relative flex px-5 py-5 items-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <div class="flex-grow border-t border-gray-400"></div>
      </div>

    </div>

    
  );
}
