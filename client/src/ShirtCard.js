import React from 'react';

function ShirtCard({name,image,price, id, userAddPurchase, currentUser}){

function purchaseShirt(){
    userAddPurchase(id,price)
}
return (
    <div className="shirtCardDiv">
        <p id="shirtName">{name}</p>
        <img className="shirtImg" src={image} alt="test"></img>
        <p id="price">${price}</p>
        {currentUser ? <button className="cardButton" onClick={purchaseShirt}>Purchase</button> : null}
    </div>
)
}

export default ShirtCard;