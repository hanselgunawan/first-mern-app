import React from "react";

let style = {
    submit:
        {
            marginRight:5,
            color:"#FFDB5C",
            backgroundColor:"#4897D8"
        },
    clearAll:
        {
            marginRight:5,
            color:"#FA6E59",
            backgroundColor:"#FFDB5C"
        }
};

const Button = props =>
    <button style={props.btnType === "submit" ? style.submit : style.clearAll} type={props.btnType} className={props.btnClass} itemID={props.btnID}>{props.btnText}</button>

export default Button;