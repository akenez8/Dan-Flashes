import React from 'react';
import UserPurchases from "./UserPurchases"

function UserShirts({currentUser, purchases, deleteShirt, userAddPurchase}){
    const userPurchases = purchases.filter((purchase) => purchase.user_id === currentUser.id)

    console.log(currentUser)
    console.log(purchases)

    const userShirtCard = userPurchases?.map((purchase) => {
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