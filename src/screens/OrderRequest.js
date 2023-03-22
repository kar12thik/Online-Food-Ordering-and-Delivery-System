import React from "react";
import RestDetailsCover from "../components/RestDetailsCover";
import { useSelector } from "react-redux";
// import UserOrderDetails from "../components/UserOrderDetails";

function OrderRequests() {
  const userName = useSelector((state) => state.loggedInUser.userName);
  const userProfileImageUrl = useSelector((state) => state.loggedInUser.userProfileImageUrl);
  return (
    <div>
      <RestDetailsCover 
      username={userName} 
      userProfileImageUrl = {userProfileImageUrl}
      />
      {/* <UserOrderDetails /> */}
    </div>
  );
}

export default OrderRequests;