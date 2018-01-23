import React from "react";
import SearchPanel from "./SearchPanel/SearchPanel";

let margin = {
    marginTop:15
};

let paddingNone = {
    paddingLeft:0,
    paddingRight:0
};

const Search = () =>
    <div className="row" style={margin}>
        <div className="col-lg-2">
        </div>
        <div className="col-lg-8" style={paddingNone}>
            <SearchPanel/>
        </div>
        <div className="col-lg-2">
        </div>
    </div>

export default Search;
