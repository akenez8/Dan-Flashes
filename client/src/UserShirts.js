import React from 'react';
import UserPurchases from "./UserPurchases"

function UserShirts({currentUser, purchases, deleteShirt, userAddPurchase}){
console.log(currentUser.purchases)
console.log(purchases)
    const userShirtCard = currentUser?.purchases?.map((purchase) => {
        return(
            <UserPurchases currentUser={currentUser} key={purchase.id} purchase={purchase} deleteShirt={deleteShirt}  userAddPurchase={userAddPurchase}/>
        )})

return(
    <div className="userShirtsDiv">
        {currentUser ? <p>{currentUser.name}'s shirts</p> : null}
        <div>{userShirtCard}</div>
        </div>
)
}

export default UserShirts;