import React,{useState, useEffect} from 'react';
import UserPurchases from "./UserPurchases"

function UserShirts({currentUser, purchases, userAddPurchase}){
    const [userShirts, setUserShirts] = useState([])

    useEffect(() => {
        if(userShirts.length > 0){
            console.log(userShirts)
            const userPurchases = purchases.filter((purchase) => {
                return (purchase.user_id === currentUser.id)})
    
            setUserShirts(userPurchases)
        }
    },[purchases])

    const userShirtCard = userShirts.map(({shirt, id}) => {
        return(
            <UserPurchases currentUser={currentUser} userAddPurchase={userAddPurchase} id={id} updateName={shirt.name} image={shirt.image} price={shirt.price}/>
        )})

return(
    <div className="userShirtsDiv">
        <p>{currentUser.name}'s shirts</p>
        <p>{userShirtCard}</p>
        </div>
)
}

export default UserShirts;