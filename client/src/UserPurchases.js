import React from 'react';

function UserPurchases({currentUser, id, purchase, deleteShirt}){
    function deletePurchase(){
        console.log("deleting...")
        fetch(`/purchases/${purchase.id}`, {
          method: 'DELETE'
        });
        deleteShirt(purchase)
      }
    return(
        <div className="shirtCardDiv">
           <p>{purchase.shirt.name}</p>
            <img className= "shirtImg" src={purchase.shirt.image} alt="Your Shirt"></img>
            <p>${purchase.price}.00</p>
            <button className="cardButton" onClick={deletePurchase}>Return</button>
            </div>
    )
}

export default UserPurchases;