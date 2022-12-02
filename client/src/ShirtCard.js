import React from 'react';

function ShirtCard({name,image,price, id, userAddPurchase}){

function purchaseShirt(){
    userAddPurchase(id,price)
}
return (
    <div className="shirtCardDiv">
        <p id="shirtName">{name}</p>
        <img id="shirtImg" src={image} alt="test"></img>
        <p id="price">{price}</p>
        <button onClick={purchaseShirt}>Purchase</button>
    </div>
)
}

export default ShirtCard;