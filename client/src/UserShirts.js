import React from 'react';
import UserPurchases from "./UserPurchases"

function UserShirts({currentUser, purchases, deleteShirt, userAddPurchase}){

    const userShirtCard = purchases?.map((purchase) => {
        return(
            <UserPurchases currentUser={currentUser} key={purchase.id} purchase={purchase} deleteShirt={deleteShirt}  userAddPurchase={userAddPurchase} name={purchase.shirt.name} image={purchase.shirt.image} price={purchase.shirt.price}/>
        )})

return(
    <div className="userShirtsDiv">
        {currentUser ? <p>{currentUser.name}'s shirts</p> : null}
        <div>{userShirtCard}</div>
        </div>
)
}

export default UserShirts;