import loggedReducer from "./isLogged";
import navbarReducer from "./navbar";
import { combineReducers } from "redux";
import loggedInUser from "./loggedInUser";
import orderRequests from "./orderRequests";

const rootReducer = combineReducers({
  isLogged: loggedReducer,
  navbar: navbarReducer,
  loggedInUser: loggedInUser,
  orderRequests: orderRequests,
});

export default rootReducer;
