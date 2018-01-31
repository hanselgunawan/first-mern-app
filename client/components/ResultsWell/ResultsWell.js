import React from "react";
import {Link} from "react-router-dom";

let panelSaveBtn = {
    float:"right",
    backgroundColor:"#4897D8",
    color:"#FFDB5C",
    fontSize:16,
    paddingLeft: 20,
    paddingRight: 20,
    letterSpacing: 2
};

let panelNumberStyle = {
    backgroundColor:"#4897D8",
    color:"#FFDB5C",
    marginRight:10
};

const ResultsWell = props =>
        {return props.results.map((data, key) =>
            <div className="well">
                <h3 className="articleHeadline"><span className="label label-primary" style={panelNumberStyle}>{key+1}</span>
                    <a href={data.web_url} target="_blank"><strong>{data.headline.main}</strong></a>
                    <Link to="/" className="btn btn-primary" onClick={props.handleSaveButton.bind(null, key)} style={panelSaveBtn}>Save</Link>
                </h3>
                <h5><strong>Publication Date:</strong> {data.pub_date ? data.pub_date.substring(0, 10) : "N/A"}</h5>
            </div>
        )}

export default ResultsWell;