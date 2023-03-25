import loggedReducer from "./isLogged";
import navbarReducer from "./navbar";
import { combineReducers } from "redux";
import loggedInUser from "./loggedInUser";
import orderRequests from "./orderRequests";
import myOrders from "./myOrders";

const rootReducer = combineReducers({
  isLogged: loggedReducer,
  navbar: navbarReducer,
  loggedInUser: loggedInUser,
  orderRequests: orderRequests,
  myOrders: myOrders,
});

export default rootReducer;
