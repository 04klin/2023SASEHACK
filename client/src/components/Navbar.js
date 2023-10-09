import React, { useEffect, useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom";
import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth";
import Signout from "./Signout"

const Navbar = () => {

  const [user, setUser] = useState(null)

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

  return (
    <div className="navbar flex">
      <div>
        <Link className="navlink" to="/">Home</Link>
        <Link className="navlink" to="/information">Information</Link>
      </div>      
      <h1 className="title">Sustainability Tracker</h1>      
      <div> 
        {user ? <div>signed in as {user.email}</div>: <Link className="navlink" to="/signup">Signup</Link>}
        {user ? <Signout/> :<Link className="navlink" to="/login">Login</Link>}        
      </div>     
        
      
    </div>
  )

}

export default Navbar