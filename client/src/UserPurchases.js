import React from 'react';

function UserPurchases({updateName, image, price}){
    return(
        <div>
            <p>{updateName}</p>
            <p>{image}</p>
            <p>{price}</p>
            <button>Return</button>
            </div>
    )
}

export default UserPurchases;