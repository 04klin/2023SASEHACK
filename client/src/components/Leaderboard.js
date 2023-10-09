import React, { useEffect, useState } from "react";
import './Leaderboard.css'
import { getFirestore, collection, query, orderBy, limit, getDocs } from "firebase/firestore";

const Leaderboard = () => {

  const database = getFirestore();
  const [board, setBoard] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);
  
  async function fetchLeaderboard() {
    const usersRef = collection(database, 'users');
    const q = query(usersRef, orderBy('points', 'desc'), limit(15));

    const querySnapshot = await getDocs(q);
    const leaderboardData = querySnapshot.docs.map(doc => [doc.data().displayName, doc.data().points]);
    setBoard(leaderboardData);
  };

  

  return(
    <div className="leaderboardContainer">
      <h1 className="leaderboardTitle">LeaderBoard</h1>
      <hr class="whiteline-right" />

      <div className="leaderboard">
        <ol className="leaderboard-content">
          {board.map(item => <li className="player">{item[0] + ": " + item[1]}</li>)}
        </ol>
        <button onClick={fetchLeaderboard}>Refresh</button>
      </div>
      
    </div>
  )
  
}

export default Leaderboard