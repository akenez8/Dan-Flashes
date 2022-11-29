import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar(){
return (
    <div className="navbarDiv">
        <NavLink exact to="/" style={{ marginRight: "10px" }}>Home</NavLink>
        <NavLink exact to="/Shop" style={{ marginRight: "10px" }}>Shop</NavLink>
        <NavLink exact to="/Login" style={{ marginRight: "10px" }}>Login</NavLink>
        <NavLink exact to="Signup" style={{ marginRight: "10px" }}>Sign Up</NavLink>
    </div>
)
}

export default NavBar;