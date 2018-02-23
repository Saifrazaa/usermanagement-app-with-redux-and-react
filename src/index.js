import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";
import reducers from "./Reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
var users = [];
        for (let i = 1; i < 10; i++) {
            users.push({
                id: i,
                username: "Saif " + i,
                job: "Employee " + i

            })
          
        }
var initial_state={
    users:users
}
var store=createStore(reducers,initial_state);
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('app'))