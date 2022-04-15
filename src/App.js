import React from "react";
import "./App.css";
import Box from "./components/Box/Box";
import data from "./data";
import jock from "./joke";
import JockLine from "./components/JockLine/JockLine";


export default function App() {

  const [box, setBox] = React.useState(data);
  const [jockLine, setJockLine] = React.useState(jock);

  function setOppo(id){
      setBox(previousBox=>{
       return previousBox.map(
         curBox=>{
           return curBox.id === id ? {...curBox, on: !curBox.on} : curBox;
         }
       );
      });
  }

  function showHide(id){
    setJockLine(prevJock=>{
      return prevJock.map(
        curPrevJock =>{
          return curPrevJock.id === id ? {...curPrevJock, show: !curPrevJock.show} : curPrevJock
        }
      );
    });
  }

  const allBoxes = box.map((itemBox)=>{
    return (
      <Box
        key={itemBox.id}
        id={itemBox.id}
        onOff={itemBox.on}
        handleEvent={setOppo}
      />
    );
  });

  const jocks = jockLine.map((curJock)=>{
    return (
    <JockLine
      key={curJock.id} 
      id={curJock.id}
      setup={curJock.setUP}
      punchline={curJock.punchLine}
      show={curJock.show}
      handleJock={showHide}
    />
    );
  });

  return ( 
    <>
    <div className="box">
    <div className="box-flex">
        {allBoxes}
    </div>    
  </div>

  <div className="jockline">
    {jocks}
  </div>
    </>
  
  );
}