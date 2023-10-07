import React, { useState } from "react";
import './Leaderboard.css'

const Leaderboard = () => {

  const [board, setBoard] = useState([["kevni", 4]
  ,['pookie', -213]
  ,['pookie', -213]
  ,['pookie', -213]
  ,['pookie', -213]
  ,['pookie', -213]
  ,['pookie', -213]
  ,['pookie', -213]
  ,['pookie', -213]
  ,['pookie', -213]
  ,['pookie', -213]
  ,['pookie', -213]
  ,['pookie', -213]
  ,['pookie', -213]
  ,['pookie', -213]
  ,['pookie', -213]
  ,['pookie', -213]
  ,['pookie', -213]
])

  return(
   
    <div className="leaderboardContainer">
      <h1 className="leaderboardTitle">LeaderBoard</h1>
      <hr class="whiteline-right" />


      <div className="leaderboard">
        <ol className="leaderboard-content">
          {board.map(item => <li className="player">{item[0] + "_________" + item[1]}</li>)}
        </ol>
      </div>
      
      
    </div>
    
  )
}

export default Leaderboard