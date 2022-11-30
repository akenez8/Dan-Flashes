import React from "react";

function Login(){

function loginClick(){
    console.log("login")
}
return(
    <div className="loginDiv">
        <input 
        type="text"
        placeholder="username"
        ></input>
        <input
        type="text"
        placeholder="password">
        </input>
        <button onClick={loginClick}>Login</button>
    </div>
)
}

export default Login