import React, {useState} from "react";
import {useHistory} from 'react-router-dom'

function Signup({updateUser}){
  const [formData, setFormData] = useState({
    name:'',
    password:''
  })
  const [errors, setErrors] = useState([])
  const history = useHistory()
  const {name, password} = formData
  function onSubmit(e){
    e.preventDefault()
    const user = {
        name,
        password
    }
    fetch(`/users`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            res.json().then(user => {
                updateUser(user)
                history.push("/login")
            })
        }else {
            // res.json().then(json => setErrors(Object.entries(json.errors)))
            res.json().then(json => setErrors(json.errors))
        }
    })
}
const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  return (
    <div>
      <form className="signupDiv" onSubmit={onSubmit}>
        Name
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={formData.name}
          placeholder="username"
        />
        Password
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
          placeholder="password"
        />
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup