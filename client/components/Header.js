import React from "react";

let headerContainerStyle = {
    borderStyle:"solid",
    borderColor:"#FA6E59",
    height:200,
    borderWidth:5,
    textAlign:"center",
    borderRadius:5,
    backgroundColor:"#4897D8"
};

let headerH1Style = {
    textAlign:"center",
    height:200,
    paddingTop:50,
    letterSpacing:10,
    color:"#FFDB5C",
    fontSize:50
};

const Header = () =>
    <div className="row">
        <div className="col-lg-2">
        </div>
        <div className="col-lg-8" style={headerContainerStyle}>
            <h1 style={headerH1Style}>ARTICLIA</h1>
        </div>
        <div className="col-lg-2">
        </div>
    </div>

export default Header;
