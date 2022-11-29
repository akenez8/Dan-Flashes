import React from "react";

function Signup(){
return(
    <div className="SignupDiv">
        <input 
        type="text"
        placeholder="username"
        ></input>
        <input
        type="text"
        placeholder="password">
        </input>
        <button>Sign Up</button>
    </div>
)
}

export default Signup