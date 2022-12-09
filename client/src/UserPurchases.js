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
           <p>name</p>
            <img className= "shirtImg" src="" alt="Your Shirt"></img>
            <p>$price.00</p>
            <button className="cardButton" onClick={deletePurchase}>Return</button>
            </div>
    )
}

export default UserPurchases;