import React from "react";

let headerContainerStyle = {
    borderStyle:"solid",
    borderColor:"black",
    height:200,
    textAlign:"center",
    borderRadius:5
};

let headerH1Style = {
    textAlign:"center",
    height:200,
    paddingTop:55,
    letterSpacing:15
};

const Header = () =>
    <div className="row">
        <div className="col-lg-2">
        </div>
        <div className="col-lg-8" style={headerContainerStyle}>
            <h1 style={headerH1Style}>New York Times Search</h1>
        </div>
        <div className="col-lg-2">
        </div>
    </div>

export default Header;
