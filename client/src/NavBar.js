import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import { NavLink } from "react-router-dom";

function NavBar({currentUser, setCurrentUser}){
    const history = useHistory()
    const updateUser = (user) => setCurrentUser(user)

    const handleLogout = () => {
        fetch(`/logout`, {
          method:"DELETE"
        })
        .then(res =>{
          if(res.ok){
            updateUser(false)
            history.push("/Login")
          }
        })
        console.log("logged out")
      }
      
return (
    <div className="navbarDiv">
        <NavLink exact to="/" style={{ marginRight: "10px" }}><button className="navButton">Home</button></NavLink>
        <NavLink exact to="/Shop" style={{ marginRight: "10px" }}><button className="navButton">Shop</button></NavLink>
        <NavLink exact to="MyShirts" style={{ marginRight: "10px" }}><button className="navButton">My Shirts</button></NavLink>
        <NavLink exact to="/Designs" style={{ marginRight: "10px" }}><button className="navButton" Designs></button></NavLink>
        {currentUser ? null : <NavLink exact to="/Login" style={{ marginRight: "10px" }}><button className="navButton">Login</button></NavLink>}
        {currentUser ? null : <NavLink exact to="Signup" style={{ marginRight: "10px" }}><button className="navButton">Sign Up</button></NavLink>}
        {currentUser ? <NavLink exact to="/UpdateUser" style={{ marginRight: "10px" }}><button className="navButton">Change Username</button></NavLink> : null}
        <div className="logoutButtonDiv">
        { currentUser ? <button className="navButton" id="logoutbutton" onClick={handleLogout} style={{ marginRight: "10px" }}>Logout</button> : null}
        </div>
    </div>
)
}

export default NavBar;