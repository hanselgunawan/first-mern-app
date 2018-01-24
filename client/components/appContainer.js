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
        console.log("SEARCH: " + this.state.search);
        console.log("NUM OF ARTICLES: " + this.state.numOfArticles);
    };

    grabArticles = (searchQuery, startYear, endYear) => {
        API.search(searchQuery, startYear, endYear)
            .then(res => this.setState({ results: res.data.data }))
            .catch(err => console.log(err));
        console.log(this.state.results);
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
                    handleSearchButton={this.handleSearchButton}
                />
                <Results
                    results={this.state.results}
                />
                <SavedArticles/>
            </div>
        );
    }
}

export default AppContainer;