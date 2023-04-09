import React from "react";

function RestDetailsCover(props) {
  return (
    <div
      className="container-fluid h-72 bg-cover bg-restaurant-cover"
      data-testid=" rest-details-cover"
    >
      <div>
        <div className="container p-20 mx-0">
          <div className="container">
            <div className="flex">
              <div className="items-center col-span-2">
                <img
                  className="w-60 scale-75"
                  alt="Food"
                  src={props.userProfileImageUrl}
                />
              </div>
              <div className="pt-16">
                <h1 className="text-2xl text-white font-semibold">
                  {props.restName}
                </h1>
                <p className="text-white">{props.restDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestDetailsCover;
