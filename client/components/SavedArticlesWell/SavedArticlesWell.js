import React from "react";

let panelRemoveBtn = {
    float:"right",
    backgroundColor:"#FFDB5C",
    color:"#FA6E59",
    fontSize:16,
    paddingLeft: 20,
    paddingRight: 20,
    letterSpacing: 2,
    borderColor:"#4897D8",
    borderWidth:2
};

let panelNumberStyle = {
    backgroundColor:"#4897D8",
    color:"#FFDB5C",
    marginRight:10
};

const SavedArticlesWell = props =>
        {return props.savedArticles.map((data, key) =>
            <div className="well">
                <h3 className="articleHeadline"><span className="label label-primary" style={panelNumberStyle}>{key+1}</span>
                    <a href={data.web_url}><strong>{data.headline}</strong></a>
                    <button className="btn btn-primary" style={panelRemoveBtn} href="/" onClick={props.handleRemoveButton.bind(null, data._id)}>Remove</button>
                </h3>
                <h5><strong>Date Saved:</strong> 02/10/2017</h5>
            </div>
        )}

export default SavedArticlesWell;