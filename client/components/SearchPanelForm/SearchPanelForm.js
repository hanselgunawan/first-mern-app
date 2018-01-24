import React from "react";
import Button from "../Button/Button";

const SearchPanelForm = props =>
    <form role="form">
        <div className="form-group">
            <label htmlFor="search">Search Term:</label>
            <input type="text"
                   className="form-control"
                   itemID="search-term"
                   name="search"
                   value={props.search}
                   onChange={props.handleInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="pwd">Number of Records to Retrieve:</label>
            <select
                className="form-control"
                itemID="num-records-select"
                name="numOfArticles"
                value={props.numOfArticles}
                onChange={props.handleInputChange}
            >
                <option value="1">1</option>
                <option value="5" selected>5</option>
                <option value="10">10</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="start-year">Start Year (Optional):</label>
            <input
                type="text"
                className="form-control"
                itemID="start-year"
                name="startYear"
                value={props.startYear}
                onChange={props.handleInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="end-year">End Year (Optional):</label>
            <input
                type="text"
                className="form-control"
                itemID="end-year"
                name="endYear"
                value={props.endYear}
                onChange={props.handleInputChange}
            />
        </div>
        <Button
            btnType="submit"
            btnClass="btn btn-default"
            btnID="run-search"
            btnText="Search"
            handleSearchButton={props.handleSearchButton}
        />
        <Button
            btnType="button"
            btnClass="btn btn-default"
            btnID="clear-all"
            btnText="Clear Results"
        />
    </form>

export default SearchPanelForm;