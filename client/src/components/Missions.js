import React, {useEffect, useState} from "react";
import "./Missions.css"
import Daily from "./Daily";
import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth";




const Missions = () => {

  const [user, setUser] = useState(null);

  
  const [missions, setMissions] = useState([
  <Daily points={200} name="Carpool with a Friend!" />,
  <Daily points={100} name="Turn off your lights!" />,
  <Daily points={150} name="Take public transit!" />]);


  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user);
      }
      else{
        setUser(null);
      }
    })
  })
  return(
    <div className="missionsContainer">
      <h1 className="missionsTitle">Dailies</h1>
      <hr class="whiteline-left" />
      
      <div className="flex-down">        
        {user ? missions.map(item => <li className="missionsList flex-down">{item}</li>) : <p>Please sign in</p>}
      </div>
      
    </div>
  )
}

export default Missions