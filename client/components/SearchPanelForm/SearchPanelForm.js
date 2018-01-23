import React from "react";

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
        <button type="submit" className="btn btn-default" itemID="run-search"><i className="fa fa-search"></i> Search</button>
        <button type="button" className="btn btn-default" itemID="clear-all"><i className="fa fa-trash"></i> Clear Results</button>
    </form>

export default SearchPanelForm;