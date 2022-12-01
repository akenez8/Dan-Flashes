import React from 'react';

function ShirtCard({name,image,price}){

return (
    <div className="shirtCardDiv">
        <p id="shirtName">{name}</p>
        <img id="shirtImg" src={image} alt="test"></img>
        <p id="price">{price}</p>
    </div>
)
}

export default ShirtCard;