import React from "react";
import Button from "../Button/Button";

const SearchPanelForm = () =>
    <form role="form">
        <div className="form-group">
            <label htmlFor="search">Search Term:</label>
            <input type="text" className="form-control" itemID="search-term"/>
        </div>
        <div className="form-group">
            <label htmlFor="pwd">Number of Records to Retrieve:</label>
            <select className="form-control" itemID="num-records-select">
                <option value="1">1</option>
                <option value="5" selected>5</option>
                <option value="10">10</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="start-year">Start Year (Optional):</label>
            <input type="text" className="form-control" itemID="start-year"/>
        </div>
        <div className="form-group">
            <label htmlFor="end-year">End Year (Optional):</label>
            <input type="text" className="form-control" itemID="end-year"/>
        </div>
        <Button
            btnType="submit"
            btnClass="btn btn-default"
            btnID="run-search"
            btnText="Search"
        />
        <Button
            btnType="button"
            btnClass="btn btn-default"
            btnID="clear-all"
            btnText="Clear Results"
        />
    </form>

export default SearchPanelForm;