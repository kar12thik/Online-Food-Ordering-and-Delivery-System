import React from "react";

export default function SingleUserOrderDetail({
  order_status,
  order_status_color,
  restaurant_name,
  total_price,
  orderItemList,
}) {
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
            <div className="ml-auto">${item.itemPrice} 20</div>
          </div>
        );
      })}

      <div className="w-full my-2 flex">
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
