import React from "react";


function JockLine(props){
    return (
        <>
            <div className="jock">
                <div className="jock__heading">
                    {props.setup && <h2>{props.setup}</h2>}
                </div>
                <div className="jock__paragraph">
                    {props.show && <p>{props.punchline}</p>}
                </div>
                <div className="jock__button">
                    <button onClick={()=>{props.handleJock(props.id)}}>Show/Hide {props.show ? <>🤣😉</> : <>🤪</>}</button>
                </div>
            </div>
        </>
    );
}

export default JockLine;