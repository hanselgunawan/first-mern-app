import React, { Component } from "react";
import Header from "./Header";

class AppContainer extends Component {
    // state = {
    //     score: 0,
    //     topScore: 0,
    //     clickStatus:""
    // };

    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}

export default AppContainer;