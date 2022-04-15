import React from "react";
import "./Box.css";

export default function Box(props){
    let styleBG = props.onOff ? "#eee" : "#000";
    return(
        <>
            <div className="box-flex-col" style={{background:`${styleBG}`}} onClick={()=>props.handleEvent(props.id)}>                    
            </div>
        </>
    );
}