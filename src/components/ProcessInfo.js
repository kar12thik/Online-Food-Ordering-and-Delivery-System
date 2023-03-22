import React from "react";
import ProcessInfoCard from "./ProcessInfoCard";
import DishImg from "../icons/dish.svg";
import DeliveryImg from "../icons/delivery.svg";
import RestaurantImg from "../icons/restaurant.svg";

function ProcessInfo({ dataTestId }) {
  return (
    <div className="bg-slate-200">
      <div className="pt-10 pb-10" data-testid={dataTestId}>
        <h1 className="text-3xl uppercase font-bold underline">How it Works</h1>
      </div>
      <div className="flex sm:px-0 md:px-14 lg:px-24">
        <div className="mx-auto flex flex-col md:flex-row lg:flex-row sm:space-x-0 md:space-x-4 lg:space-x-4">
          <div className="my-4 md:my-0 lg:my-0">
            <ProcessInfoCard
              imgUrl={RestaurantImg}
              cardHeading="Choose A Restaurant"
              cardDescription="Discover new culinary horizons to fill your tummy with our diverse restaurant selection."
            />
          </div>
          <div className="my-4 md:my-0 lg:my-0">
            <ProcessInfoCard
              imgUrl={DishImg}
              cardHeading="Choose A Tasty Dish"
              cardDescription="Take your taste buds on a journey with our expertly crafted menu from your chosen restaurant."
            />
          </div>
          <div className="my-4 md:my-0 lg:my-0">
            <ProcessInfoCard
              imgUrl={DeliveryImg}
              cardHeading="Pick Up Or Delivery"
              cardDescription="Satisfy your cravings on your terms with our flexible delivery options."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessInfo;
