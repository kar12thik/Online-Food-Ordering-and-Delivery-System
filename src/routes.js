import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Restaurants from './screens/Restaurants';
import RegisterRestaurant from './screens/RegisterRestaurant';

function AppRoutes(){
    return(
        <Router>
            <div>
                <Route exact path='/' component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/restaurants' component={Restaurants}></Route>
                <Route path='/register-restaurant' component={RegisterRestaurant}></Route>
            </div>
        </Router>
    );
}

export default AppRoutes