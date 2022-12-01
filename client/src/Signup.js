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
      <form className="signup-container" onSubmit={onSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={formData.name}
          placeholder="username"
        />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
          placeholder="password"
        />
        <div>
          <button type="submit">SignUp</button>
        </div>
      </form>
    </div>
  );
// return(
//     <div className="signupDiv">
//       <form className="signup-container" onSubmit={onSubmit}>
//         Name
//         <input
//           type="text"
//           value={FormData.name}
//           onChange={handleChange}
//           placeholder="Name"
//         />
//         Password
//         <input
//           type="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//         />
//         <div>
//           <button type="submit">Create User</button>
//         </div>
//       </form>
//     </div>
// )
}

export default Signup