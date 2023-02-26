
import loggedReducer from "./isLogged";
import navbarReducer from "./navbar";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    isLogged: loggedReducer,
    navbar:navbarReducer
})

export default rootReducer;