import React from "react";

function RestDetailsCover(rest_data) {
  const rest_name = rest_data.restName;
  console.log(rest_data);
  console.log(rest_data.restDescription);
  return (
    <div className="container-fluid h-72 bg-cover bg-restaurant-cover">
      <div>
        <div className="container p-20 mx-0">
          <div className="container">
            <div className="flex">
              <div className="items-center col-span-2">
                <img
                  className="w-60 scale-75"
                  alt="Food"
                  src={rest_data.userProfileImageUrl}
                />
              </div>
              <div className="pt-16">
                <h1 className="text-2xl text-white font-semibold">
                  {rest_name}
                </h1>
                <p className="text-white">{rest_data.restDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestDetailsCover;
