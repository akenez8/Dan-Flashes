import React from 'react';

function UserPurchases({id, name, image, price, deletePurchase, userUpdatePurchase}){
    
    return(
        <div className="userShirtCardDiv">
            <p>{name}</p>
            <img className= "userShirtImg" src={image}></img>
            <p>{price}</p>
            <button onClick={() => deletePurchase(id)}>Return</button>
            </div>
    )
}

export default UserPurchases;