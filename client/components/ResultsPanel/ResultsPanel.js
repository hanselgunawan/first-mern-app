import React from "react";
import ResultsWell from "../ResultsWell/ResultsWell";
import EmptyWell from "../EmptyWell/EmptyWell";

let panelContainerStyle = {
    borderStyle:"solid",
    borderColor:"#FA6E59",
    borderWidth: 2,
    borderRadius: 5
};

let panelHeadingStyle = {
    color:"#FFDB5C",
    fontSize:18,
    letterSpacing:2,
    backgroundColor:"#4897D8"
};

const ResultsPanel = props =>
    <div className="panel panel-primary" style={panelContainerStyle}>
        <div className="panel-heading" style={panelHeadingStyle}>Top Articles</div>
        <div className="panel-body">
            {props.results.length>0 ? <ResultsWell results={props.results} handleSaveButton={props.handleSaveButton} /> : <EmptyWell/>}
        </div>
    </div>

export default ResultsPanel;