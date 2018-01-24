import React from "react";
import ResultsPanel from "./ResultsPanel/ResultsPanel";

let margin = {
    marginTop:15
};

let paddingNone = {
    paddingLeft:0,
    paddingRight:0
};

const Results = () =>
    <div className="row" style={margin}>
        <div className="col-lg-2">
        </div>
        <div className="col-lg-8" style={paddingNone}>
            <ResultsPanel/>
        </div>
        <div className="col-lg-2">
        </div>
    </div>

export default Results;
