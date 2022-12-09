import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'

function UpdateUser({currentUser, setCurrentUser}){
    const [users, setUsers] = useState([])
    const history = useHistory()
    
    useEffect(() => {
        fetch("/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
      },[])

      console.log(users)


    // const editedReview = {
    //     method: "PATCH",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ newReviewObj }),
    //   };
    //   fetch(`/reviews/${id}`, editedReview)
    //     .then((r) => r.json())
    //     .then((data) => {
    //       console.log(data)
    //       const updatedUser = users?.map((proteinshake)=> {
    //         return proteinshake.id === data.id
    //           ? data
    //           : proteinshake;
    //       })
    //       setUser(updatedUser);
    //       history.push("/Shop")
    //     });
  

        function handleChange(){
            console.log("hello")
        }
    return (
        <div>
            <p>Change your Username!</p>
            <form>
                <input type="text" placeholder="username" onChange={handleChange}></input>
            </form>
            </div>
    )
}

export default UpdateUser