import React, { Component } from "react";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";
import SavedArticles from "./SavedArticles";
import API from "../utils/API";

class AppContainer extends Component {
    state = {
        search: "",
        startYear:0,
        endYear:0,
        results:[],
        headline:"",
        webUrl:"",
        dateSaved:"",
        messageFromServer:""
    };

    componentDidMount() {
        this.grabArticles("tech", 2000, 2012);
    }

    grabArticles = (searchQuery, startYear, endYear) => {
        API.search(searchQuery, startYear, endYear)
            .then(res => this.setState({ results: res.data.response.docs }))
            .then(console.log(this.state.results))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
        console.log("SEARCH: " + this.state.search);
        console.log("START YEAR: " + this.state.startYear);
        console.log("END YEAR: " + this.state.endYear);
    };

    handleSearchButton = event => {
        event.preventDefault();
        this.setState({
            results:[]
        });
        this.grabArticles(this.state.search, this.state.startYear, this.state.endYear);
    };

    clearFields = () => {
        this.setState({
            search: "",
            startYear:0,
            endYear:0
        });
    };

    handleClearSearchButton = event => {
        event.preventDefault();
        this.clearFields();
    };

    handleSaveButton = key => {
        console.log(this.state.results[key].headline.main);
    };

    render() {
        return (
            <div>
                <Header/>
                <Search
                    search={this.state.search}
                    startYear={this.state.startYear}
                    endYear={this.state.endYear}
                    handleInputChange={this.handleInputChange}
                    handleSearchButton={this.handleSearchButton}
                    handleClearSearchButton={this.handleClearSearchButton}
                />
                <Results
                    results={this.state.results}
                    handleSaveButton={this.handleSaveButton}
                />
                <SavedArticles/>
            </div>
        );
    }
}

export default AppContainer;