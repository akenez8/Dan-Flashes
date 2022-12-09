import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import UserPurchases from './UserPurchases';

function UpdateUser({currentUser,onUpdateUser}){
    const history = useHistory()
    const [userName, setUserName] = useState(currentUser.name)
    const [errors, setErrors] = useState(false)
    
    console.log(userName)
   const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/users/${currentUser.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: userName}),
    })
      .then((r) => {
        if(r.ok){
        r.json().then((updatedUser) => {
          onUpdateUser(updatedUser)
          history.push("/Shop")
        })
    } else {
        r.json().then((err) => setErrors(err.errors))
        }
    })
  };

    function handleChange(e){
        e.preventDefault();
        setUserName(e.target.value)
    }

    return (
        <div>
            <p className="nameChange">Change your Username!</p>
            <form>
                <input type="text" placeholder="username" onChange={handleChange}></input>
                <button onClick={handleSubmit}>submit</button>
            </form>
            </div>
    )
}

export default UpdateUser