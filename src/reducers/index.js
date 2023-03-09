import loggedReducer from "./isLogged";
import navbarReducer from "./navbar";
import loggedInUser from "./loggedInUser";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isLogged: loggedReducer,
  navbar: navbarReducer,
  loggedInUser: loggedInUser,
});

export default rootReducer;
