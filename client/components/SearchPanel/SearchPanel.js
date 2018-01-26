import React from "react";
import SearchPanelForm from "../SearchPanelForm/SearchPanelForm";

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

const SearchPanel = props =>
    <div className="panel panel-primary" style={panelContainerStyle}>
        <div className="panel-heading" style={panelHeadingStyle}>Search Parameters</div>
        <div className="panel-body">
            <SearchPanelForm
                search={props.search}
                startYear={props.startYear}
                endYear={props.endYear}
                handleInputChange={props.handleInputChange}
                handleSearchButton={props.handleSearchButton}
                handleClearSearchButton={props.handleClearSearchButton}
            />
        </div>
    </div>

export default SearchPanel;