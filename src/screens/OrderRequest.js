import React from "react";
import RestDetailsCover from "../components/RestDetailsCover";
import { useSelector } from "react-redux";
import OrderRequestsDetails from "../components/OrderRequestsDetails";

function OrderRequests() {
  const userName = useSelector((state) => state.loggedInUser.userName);
  const userProfileImageUrl = useSelector((state) => state.loggedInUser.userProfileImageUrl);
  return (
    <div>
      <RestDetailsCover 
      username={userName} 
      userProfileImageUrl = {userProfileImageUrl}
      />
      <OrderRequestsDetails />
    </div>
  );
}

export default OrderRequests;