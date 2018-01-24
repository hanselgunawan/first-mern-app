import React, { Component } from "react";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";
import SavedArticles from "./SavedArticles";
import API from "../utils/API";

class AppContainer extends Component {
    state = {
        search: "",
        numOfArticles: 0,
        startYear:0,
        endYear:0,
        results:[]
    };

    handleInputChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    grabArticles = (searchQuery, startYear, endYear) => {
        API.search()
    };

    handleSearchButton = event => {
        event.preventDefault();
        this.grabArticles(this.state.search, this.state.startYear, this.state.endYear);
    };

    render() {
        return (
            <div>
                <Header/>
                <Search
                    search={this.state.search}
                    numOfArticles={this.state.numOfArticles}
                    startYear={this.state.startYear}
                    endYear={this.state.endYear}
                    handleInputChange={this.handleInputChange}
                />
                <Results/>
                <SavedArticles/>
            </div>
        );
    }
}

export default AppContainer;