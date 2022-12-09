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

      function testClick(){
        console.log({currentUser})
      }

      
return (
    <div className="navbarDiv">
        <NavLink exact to="/" style={{ marginRight: "10px" }}><button className="navButton">Home</button></NavLink>
        <NavLink exact to="/Shop" style={{ marginRight: "10px" }}><button className="navButton">Shop</button></NavLink>
        <NavLink exact to="MyShirts" style={{ marginRight: "10px" }}><button className="navButton">My Shirts</button></NavLink>
        {currentUser ? null : <NavLink exact to="/Login" style={{ marginRight: "10px" }}><button className="navButton">Login</button></NavLink>}
        {currentUser ? null : <NavLink exact to="Signup" style={{ marginRight: "10px" }}><button className="navButton">Sign Up</button></NavLink>}
        <NavLink exact to="/UpdateUser" style={{ marginRight: "10px" }}><button className="navButton">Change Username</button></NavLink>
        <div className="logoutButtonDiv">
        { currentUser ? <button className="navButton" onClick={handleLogout} style={{ marginRight: "10px" }}>Logout</button> : null}
        <button onClick={testClick}>test</button>
        </div>
    </div>
)
}

export default NavBar;