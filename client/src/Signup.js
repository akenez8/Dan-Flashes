import React from "react";

function Signup(){

function signupClick(){
    console.log("signup")
}

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
        <button onClick={signupClick}>Sign Up</button>
    </div>
)
}

export default Signup