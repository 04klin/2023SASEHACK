import React, { useEffect, useState } from "react";
import "./Daily.css"
import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; // Import Firestore functions
import { update } from "firebase/database";

function Daily({points, name}) {

  const database = getFirestore(); // Get Firestore reference
  const [clicked, setClicked] = useState(false)
  const [user, setUser] = useState(null);
  const [userPoints, setUserPoints] = useState(0); // State to store the user's points

  useEffect(() => {
    const listen = onAuthStateChanged(auth, async (user) => {
      if(user){
        setUser(user);

        // Fetch additional user data from Firestore
        const docRef = doc(database, 'users', user.email);
        const docSnap = await getDoc(docRef);
          
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setUserPoints(docSnap.data().points); // Update the user's points
        } else {
          console.log("No such document!");
        }
      }
      else{
        setUser(null);
      }
    })
  })

  async function toggle() {
    if(clicked){setClicked(false);}
    else{setClicked(true);}
    console.log(user.displayName)
    console.log(user.email)
    console.log(userPoints) // Log the user's points
    console.log(user.points  + user.points)
    console.log(points)

    const postData = {      
      displayName: user.displayName,
      uid: user.uid,
      email: user.email,
      points: userPoints + points,
    };
    const targetUser = doc(database, 'users', user.email);
    // Update Firestore document
    await updateDoc(targetUser, postData, { merge: true });    
    console.log("update complete!");    
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
