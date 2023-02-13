import React from "react";
import ProcessInfoCard from "./ProcessInfoCard";
import DishImg from "../icons/dish.svg";
import DeliveryImg from "../icons/delivery.svg";
import RestaurantImg from "../icons/restaurant.svg";

function ProcessInfo() {
  return (
    <div>
      <div className="pt-10 pb-10">
        <h1 className="text-3xl uppercase font-bold underline">How it Works</h1>
        <p className="mt-2 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
      </div>
      <div className="flex sm:px-0 md:px-14 lg:px-24">
        <div className="mx-auto flex flex-col md:flex-row lg:flex-row sm:space-x-0 md:space-x-4 lg:space-x-4">
          <div className="my-4 md:my-0 lg:my-0">
            <ProcessInfoCard
              imgUrl={RestaurantImg}
              cardHeading="Choose A Restaurant"
            />
          </div>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player
            src="https://assets6.lottiefiles.com/packages/lf20_2z4qmxlj.json"
            background="transparent"
            speed="1"
            // style="width: 300px; height: 300px;"
            className="w-20 h-20"
            loop
            controls
            autoplay
          ></lottie-player>
          <div className="my-4 md:my-0 lg:my-0">
            <ProcessInfoCard
              imgUrl={DishImg}
              cardHeading="Choose A Tasty Dish"
            />
          </div>
          <div className="my-4 md:my-0 lg:my-0">
            <ProcessInfoCard
              imgUrl={DeliveryImg}
              cardHeading="Pick Up Or Delivery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessInfo;
