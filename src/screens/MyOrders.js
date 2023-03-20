import React from "react";
import UserDetailsCover from "../components/UserDetailsCover";
import { useSelector } from "react-redux";
import UserOrderDetails from "../components/UserOrderDetails";

function MyOrders() {
  const userName = useSelector((state) => state.loggedInUser.userName);
  return (
    <div>
      <UserDetailsCover username={userName} />
      <UserOrderDetails />
    </div>
  );
}

export default MyOrders;
