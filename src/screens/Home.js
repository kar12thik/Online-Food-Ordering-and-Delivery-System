import React from 'react';
import NavigationBar from "../components/NavigationBar";
import Deals from "../components/Deals";
import ProcessInfo from "../components/ProcessInfo";
import SearchRest from "../components/SearchRest";
import OrderNow from "../components/OrderNow";
import FeaturedRest from "../components/FeaturedRest";
import Footer from "../components/Footer";

function Home() {
    return(
        <div>
            <NavigationBar />
            <Deals />
            <ProcessInfo />
            <SearchRest />
            <OrderNow />
            <FeaturedRest />
            <Footer />
        </div>
    );
}

export default Home