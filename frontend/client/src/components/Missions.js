import React, {useState} from "react";
import "./Missions.css"
import Daily from "./Daily";

const Missions = () => {

  const [missions, setMissions] = useState([<Daily points={5} name="penis" description="se"/>,
  <Daily points={4} name="no" description="njdwne"/>,
  <Daily points={3} name="yes" description="sdwsce"/>,
  <Daily points={2} name="maeb" description="sesdsd"/>]);


  function mapout() {
    for (let index = 0; index < 5; index++) {
      setMissions(missions);          
    }
    
  }

  return(
    <div className="missionsContainer">
      <h1 className="missionsTitle">Dailies</h1>
      <p>This is where log your Dailies</p>
      <ul>
        {missions.map(item => <li>{item}</li>)}
      </ul>
    </div>
  )
}

export default Missions