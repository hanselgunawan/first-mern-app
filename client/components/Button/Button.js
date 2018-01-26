import React from "react";

let style = {
    submit:
        {
            marginRight:5,
            color:"#FFDB5C",
            backgroundColor:"#4897D8",
            paddingLeft: 15,
            paddingRight: 15
        },
    clearAll:
        {
            marginRight:5,
            color:"#FA6E59",
            backgroundColor:"#FFDB5C",
            paddingLeft: 15,
            paddingRight: 15
        }
};

const Button = props =>
    <button onClick={props.btnType === "submit" ? props.handleSearchButton : props.handleClearSearchButton} style={props.btnType === "submit" ? style.submit : style.clearAll} type={props.btnType} className={props.btnClass} itemID={props.btnID}>{props.btnText}</button>

export default Button;