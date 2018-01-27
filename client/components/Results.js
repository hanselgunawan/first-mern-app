import React from "react";
import ResultsPanel from "./ResultsPanel/ResultsPanel";

let margin = {
    marginTop:15
};

let paddingNone = {
    paddingLeft:0,
    paddingRight:0
};

const Results = props =>
    <div className="row" style={margin}>
        <div className="col-lg-2">
        </div>
        <div className="col-lg-8" style={paddingNone}>
            <ResultsPanel
                results={props.results}
                handleSaveButton={props.handleSaveButton}
            />
        </div>
        <div className="col-lg-2">
        </div>
    </div>

export default Results;
