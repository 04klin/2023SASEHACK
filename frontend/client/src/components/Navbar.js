import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar flex">      
      <h1 className="title">Sustainability Tracker</h1>      
      <div>
        <Link className="navlink" to="/">Home</Link>
        <Link className="navlink" to="/signup">Signup</Link>
        <Link className="navlink" to="/login">Login</Link>
      </div>     
      
    </div>
  )

}

export default Navbar