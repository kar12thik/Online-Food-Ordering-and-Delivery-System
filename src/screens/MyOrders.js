import React from "react";
import UserDetailsCover from "../components/UserDetailsCover";
import { useSelector } from "react-redux";
import UserOrderDetails from "../components/UserOrderDetails";

function MyOrders() {
  const userName = useSelector((state) => state.loggedInUser.userName);
  const userProfileImageUrl = useSelector(
    (state) => state.loggedInUser.userProfileImageUrl
  );
  return (
    <div>
      <UserDetailsCover
        username={userName}
        userProfileImageUrl={userProfileImageUrl}
      />
      <UserOrderDetails />
    </div>
  );
}

export default MyOrders;
