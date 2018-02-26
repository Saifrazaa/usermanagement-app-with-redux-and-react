import { combineReducers } from "redux";
import {routerReducer} from "react-router-redux";
import users from "./users";
let reducers=combineReducers({
    users:users,
    routing:routerReducer
})
export default reducers;