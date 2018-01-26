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
            handleClearSearchButton={props.handleClearSearchButton}
        />
    </form>

export default SearchPanelForm;