import loggedReducer from "./isLogged";
import navbarReducer from "./navbar";
import { combineReducers } from "redux";
import loggedInUser from "./loggedInUser";
import myOrders from "./myOrders";

const rootReducer = combineReducers({
  isLogged: loggedReducer,
  navbar: navbarReducer,
  loggedInUser: loggedInUser,
  myOrders: myOrders,
});

export default rootReducer;
