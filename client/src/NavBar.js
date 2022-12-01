import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar(){
return (
    <div className="navbarDiv">
        <NavLink exact to="/" style={{ marginRight: "10px" }}><button className="navButton">Home</button></NavLink>
        <NavLink exact to="/Shop" style={{ marginRight: "10px" }}><button className="navButton">Shop</button></NavLink>
        <NavLink exact to="/Login" style={{ marginRight: "10px" }}><button className="navButton">Login</button></NavLink>
        <NavLink exact to="Signup" style={{ marginRight: "10px" }}><button className="navButton">Sign Up</button></NavLink>
    </div>
)
}

export default NavBar;