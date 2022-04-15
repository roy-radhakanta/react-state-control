import React from "react";

export default function Star(props){
    const fillOrOutline = props.isFilled ? "outline.png" : "filled.png";
    return (
        <div className="star">
            <div className="star-img">
                <img src={`./img/${fillOrOutline}`} alt="" onClick={props.flipedFill} title="Click Me to Change"/>
            </div>
        </div>
    );
}