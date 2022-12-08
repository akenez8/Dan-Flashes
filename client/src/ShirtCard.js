import React from 'react';

function ShirtCard({name,image,price, id, userAddPurchase, currentUser}){

function purchaseShirt(){
    userAddPurchase(id,price)
}
return (
    <div className="shirtCardDiv">
        <p id="shirtName">{name}</p>
        <img id="shirtImg" src={image} alt="test"></img>
        <p id="price">{price}</p>
        {currentUser ? <button onClick={purchaseShirt}>Purchase</button> : null}
    </div>
)
}

export default ShirtCard;