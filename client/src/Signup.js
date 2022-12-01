import React, {useState} from "react";
import {useHistory} from 'react-router-dom'

function Signup(){
const [name, setName]= useState("")
const [password, setPassword] = useState("")
function handleSubmit(){
    console.log("submitting")
}

return(
    <div className="signupDiv">
      <form className="signup-container" onSubmit={handleSubmit}>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button type="submit">Create User</button>
        </div>
      </form>
    </div>
)
}

export default Signup