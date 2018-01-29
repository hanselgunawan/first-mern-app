import React from "react";
import SavedArticlesWell from "../SavedArticlesWell/SavedArticlesWell";
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

const SavedArticlesPanel = props =>
    <div className="panel panel-primary" style={panelContainerStyle}>
        <div className="panel-heading" style={panelHeadingStyle}>Saved Articles</div>
        <div className="panel-body">
            {props.savedArticles.length > 0 ? <SavedArticlesWell savedArticles={props.savedArticles} handleRemoveButton={props.handleRemoveButton} /> : <EmptyWell/>}
        </div>
    </div>

export default SavedArticlesPanel;