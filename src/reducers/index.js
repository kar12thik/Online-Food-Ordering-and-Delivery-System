import loggedReducer from "./isLogged";
import navbarReducer from "./navbar";
import { combineReducers } from "redux";
import loggedInUser from "./loggedInUser";

const rootReducer = combineReducers({
  isLogged: loggedReducer,
  navbar: navbarReducer,
  loggedInUser: loggedInUser,
});

export default rootReducer;
