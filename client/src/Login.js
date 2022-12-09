import React,{useState} from "react";
import {useHistory} from 'react-router-dom'



function Login({updateUser}){
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
   console.log(user)
    fetch(`/Login`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            res.json().then(user => {
                updateUser(user)
                history.push("/Shop")
            })
        }else {
            res.json().then(json => setErrors(json.errors))
        }
    })
   
}

const handleChange = (e) => {
    const { name, value } = e.target 
    setFormData({ ...formData, [name]: value })
  }


return(
    <div className="loginDiv">
    <form onSubmit={onSubmit}>
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
      <input type="submit" value="submit"/>
    </form>
    </div>
)
}

export default Login