import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./screens/Home";
import Login from "./screens/Login";

function AppRoutes(){
    return(
        <Router>
            <div>
                <Route exact path='/' component={Home}></Route>
                <Route path='/login' component={Login}></Route>
            </div>
        </Router>
    );
}

export default AppRoutes