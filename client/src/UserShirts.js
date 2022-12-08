import React,{useState, useEffect} from 'react';
import UserPurchases from "./UserPurchases"

function UserShirts({deletePurchase, currentUser, purchases, userAddPurchase, userUpdatePurchase}){
    const [userShirts, setUserShirts] = useState([])

    // useEffect(() => {
    //     if(userShirts.length > 0){
    //         console.log(userShirts)
    //         const userPurchases = purchases.filter((purchase) => {
    //             return (purchase.user_id === currentUser.id)})
    
    //         setUserShirts(userPurchases)
    //     }
    // },[purchases])

    const userShirtCard = purchases.map((purchase) => {
        return(
            <UserPurchases id={purchase.id} deletePurchase={deletePurchase} userUpdatePurchase={userUpdatePurchase} currentUser={currentUser} userAddPurchase={userAddPurchase} name={purchase.shirt.name} image={purchase.shirt.image} price={purchase.shirt.price}/>
        )})

return(
    <div className="userShirtsDiv">
        {currentUser ? <p>{currentUser.name}'s shirts</p> : null}
        <p>{userShirtCard}</p>
        </div>
)
}

export default UserShirts;