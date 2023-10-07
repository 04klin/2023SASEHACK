import React from "react";

function Daily({points, name, description}) {

  return(

    //This displays points, name, and description for each daily
    <div>
      {points}, {name},{description}
    </div>
  )
}

export default Daily;