import React from "react";

function Login(){
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
        <button>Login</button>
    </div>
)
}

export default Login