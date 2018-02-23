import { combineReducers } from "redux";

import {users} from "./users";
let reducers=combineReducers({
    users:users
})
export default reducers;