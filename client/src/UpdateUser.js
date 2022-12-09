import React from 'react';

function UpdateUser({currentUser, setCurrentUser}){
    return (
        <div>
            <p>Change your Username!</p>
            <form>
                <input type="text" placeholder="username"></input>
            </form>
            </div>
    )
}

export default UpdateUser