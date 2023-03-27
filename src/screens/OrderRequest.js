import React from "react";
import RestDetailsCover from "../components/RestDetailsCover";
import { useSelector } from "react-redux";
import UserOrderDetails from "../components/UserOrderDetails";

function OrderRequests() {
  const restName = useSelector((state) => state.loggedInUser.restName);
  const userProfileImageUrl = useSelector((state) => state.loggedInUser.userProfileImageUrl);
  const restDescription = useSelector((state) => state.loggedInUser.restDescription);
  return (
    <div>
      <RestDetailsCover 
      restName={restName} 
      userProfileImageUrl = {userProfileImageUrl}
      restDescription = {restDescription}
      />
      <UserOrderDetails />
    </div>
  );
}

export default OrderRequests;