import React, { useState } from "react";
import './Leaderboard.css'

const Leaderboard = () => {

  const [board, setBoard] = useState([["kevni", 4],['pookie', -213]])

  return(
   
    <div className="leaderboardContainer">
      <h1 className="leaderboardTitle">LeaderBoard</h1>
      
      <ol>
        {board.map(item => <li>{item[0] + "_________" + item[1]}</li>)}
      </ol>
    </div>
    
  )
}

export default Leaderboard