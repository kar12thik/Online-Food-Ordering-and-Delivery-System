import React from "react";
import ProcessInfoCard from "./ProcessInfoCard";

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
            <ProcessInfoCard />
          </div>
          <div className="my-4 md:my-0 lg:my-0">
            <ProcessInfoCard />
          </div>
          <div className="my-4 md:my-0 lg:my-0">
            <ProcessInfoCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessInfo;
