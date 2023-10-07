import React, { useState } from "react";
import "./Daily.css"

function Daily({points, name}) {

  const [clicked, setClicked] = useState(false)

  function toggle() {
    if(clicked){
      setClicked(false);
    }
    else{
      setClicked(true);
    }
  }


  return(

    
    //This displays points, and name for each daily
    <button onClick={toggle} className={clicked? "dailyMissionsClicked" : "dailyMissions"}>
      <h1>{name}</h1>
      <h3>{points}</h3>
    </button>
  )
}

export default Daily;