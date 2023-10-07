import React, {useState} from "react";
import "./Missions.css"
import Daily from "./Daily";

const Missions = () => {

  const [missions, setMissions] = useState([
  <Daily points={200} name="Carpool with a Friend!" />,
  <Daily points={100} name="Turn off your lights!" />,
  <Daily points={150} name="Take public transit!" />]);


  return(
    <div className="missionsContainer">
      <h1 className="missionsTitle">Dailies</h1>
      <hr class="whiteline-left" />
      <div className="flex-down">
        {missions.map(item => <li className="missionsList flex-down">{item}</li>)}
      </div>
      
    </div>
  )
}

export default Missions