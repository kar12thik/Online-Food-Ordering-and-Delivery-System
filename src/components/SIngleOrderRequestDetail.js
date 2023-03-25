import firebase from '../config/firebase';
import { useSelector } from "react-redux";

function handleSendToInProgressBtn(userUid, orderId, restaurantUid, status) {
  console.log("user id:", userUid);
  console.log("order id:", orderId);
  console.log("restaurant id:", restaurantUid);
  firebase.firestore().collection('users').doc(restaurantUid).collection('orderRequest').doc(orderId).update({
      status: status,
  }).then(() => {
      console.log("First Seccussfully send to IN PROGRESS")
      firebase.firestore().collection('users').doc(userUid).collection('myOrder').doc(orderId).update({
          status: status,
      }).then(()=>{
          console.log("Second Seccussfully send to IN PROGRESS")
      })
  })
};

export default function SingleOrderRequestDetail({
  orderId,
  userUid,
  order_status,
  order_status_color,
  user_name,
  total_price,
  orderItemList,
  nextaction,
  status
}) {
  const restaurantUid = useSelector((state) => state.loggedInUser.userId);
  return (
    <div>
      <div className="flex">
        <h1 className="text-lg font-black">{user_name}</h1>
        <h1 className={`ml-auto uppercase font-bold ${order_status_color}`}>
          {order_status}
        </h1>
      </div>

      {/* Single order list Card */}
      {orderItemList.map((item) => {
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
            <button type="button" className="ml-2 rounded-lg bg-orange p-2.5 text-sm font-medium text-black" onClick={() => handleSendToInProgressBtn(userUid, orderId, restaurantUid, status)}>{nextaction}</button>
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
