import React from "react";
import "./Daily.css"

function Daily({points, name, description}) {

  return(

    //This displays points, name, and description for each daily
    <div className="dailyMissions">
      <h1>{name}</h1>
      <h3>{description}</h3>
      <h3>{points}</h3>
    </div>
  )
}

export default Daily;