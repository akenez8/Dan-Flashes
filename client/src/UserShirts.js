import React from 'react';
import UserPurchases from "./UserPurchases"

function UserShirts({currentUser, purchases, deleteShirt, userAddPurchase}){
    const userPurchases = purchases.filter((purchase) => purchase.user_id === currentUser.id)
    const userShirtCard = userPurchases?.map((purchase) => {
        return(
            <UserPurchases currentUser={currentUser} key={purchase.id} purchase={purchase} deleteShirt={deleteShirt}  userAddPurchase={userAddPurchase}/>
        )})

return(
    <div>
        <p className="userShirtsTitle">Your Complicated Collection</p>
        <div className="userShirtsDiv">{userShirtCard}</div>
        </div>
)
}

export default UserShirts;