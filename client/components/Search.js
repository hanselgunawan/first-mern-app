import React from "react";
import SearchPanel from "./SearchPanel/SearchPanel";

let margin = {
    marginTop:15
};

let paddingNone = {
    paddingLeft:0,
    paddingRight:0
};

const Search = props =>
    <div className="row" style={margin}>
        <div className="col-lg-2">
        </div>
        <div className="col-lg-8" style={paddingNone}>
            <SearchPanel
                search={props.search}
                startYear={props.startYear}
                endYear={props.endYear}
                handleInputChange={props.handleInputChange}
                handleSearchButton={props.handleSearchButton}
                handleClearSearchButton={props.handleClearSearchButton}
            />
        </div>
        <div className="col-lg-2">
        </div>
    </div>

export default Search;
