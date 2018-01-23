import React, { Component } from "react";
import Header from "./Header";
import Search from "./Search";

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
                <Search/>
            </div>
        );
    }
}

export default AppContainer;