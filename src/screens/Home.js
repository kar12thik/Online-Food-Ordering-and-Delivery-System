import React from "react";
import Banner from "../components/Banner";
import ProcessInfo from "../components/ProcessInfo";
import FeaturedRest from "../components/FeaturedRest";
import SearchRest from "../components/SearchRest";
import OrderNow from "../components/OrderNow";

function Home() {
  return (
    <div className="App sm:w-screen md:w-screen lg:w-screen flex flex-col">
      <Banner />
      <SearchRest />
      <ProcessInfo />
      <OrderNow />
      <FeaturedRest />
    </div>
  );
}

export default Home;
