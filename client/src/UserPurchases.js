import React from 'react';

function UserPurchases({id, name, image, price, deletePurchase, userUpdatePurchase}){

    return(
        <div className="userShirtCardDiv">
            <p>{name}</p>
            <img className= "userShirtImg" src={image} alt="Your Shirt"></img>
            <p>${price}.00</p>
            <button onClick={() => deletePurchase(id)}>Return</button>
            </div>
    )
}

export default UserPurchases;