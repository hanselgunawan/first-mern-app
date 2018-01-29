import React from "react";
import SavedArticlesPanel from "./SavedArticlesPanel/SavedArticlesPanel";

let margin = {
    marginTop:15
};

let paddingNone = {
    paddingLeft:0,
    paddingRight:0
};

const SavedArticles = props =>
    <div className="row" style={margin}>
        <div className="col-lg-2">
        </div>
        <div className="col-lg-8" style={paddingNone}>
            <SavedArticlesPanel
                savedArticles={props.savedArticles}
                handleRemoveButton={props.handleRemoveButton}
            />
        </div>
        <div className="col-lg-2">
        </div>
    </div>

export default SavedArticles;
