import React from "react";
import ReactDom from "react-dom";
import Users from "./Users";
import "../stylesheets/main.scss";
class App extends React.Component {
    render(){
        return (
            <div className="container">
                <Users />
            </div>
        )
    }
}

export default App;