import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";
import SavedArticles from "./SavedArticles";
import API from "../utils/API";
var querystring = require('querystring');

class AppContainer extends Component {
    state = {
        search: "",
        startYear:0,
        endYear:0,
        results:[],
        savedArticles:[],
        headline:"",
        webUrl:"",
        dateSaved:""
    };

    componentDidMount() {
        this.grabArticles("tech", 2000, 2012);
        this.getSavedArticles();
    }

    getSavedArticles = () => {
        axios.get("/getAll")
            .then( res => this.setState({ savedArticles:res.data }))
            .catch(err => console.log(err));
    };

    grabArticles = (searchQuery, startYear, endYear) => {
        API.search(searchQuery, startYear, endYear)
            .then(res => this.setState({ results: res.data.response.docs }))
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

    insertNewArticle = key => {
        let myDate = new Date();
        let self = this;
        axios.post("/insert",
            querystring.stringify({
                headline: this.state.results[key].headline.main,
                web_url: this.state.results[key].web_url,
                saved_date: myDate.getFullYear() + "-" + (myDate.getMonth()+1) + "-" + myDate.getDate()
            }), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(function (response) {
            console.log(response);
            self.getSavedArticles();
        });
    };

    removeArticle = key => {
        let self = this;
        axios.get("/delete?id="+key+"")
            .then(function (response) {
            console.log(response);
            self.getSavedArticles();
        });
    };

    handleSaveButton = key => {
        this.insertNewArticle(key);
    };

    handleRemoveButton = key => {
        this.removeArticle(key);
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
                <SavedArticles
                    savedArticles={this.state.savedArticles}
                    handleRemoveButton={this.handleRemoveButton}
                />
            </div>
        );
    }
}

export default AppContainer;