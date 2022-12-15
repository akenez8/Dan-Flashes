import React from 'react';

function CreateDesigns({currentUser}){
return(
    <div className="createDesignDiv">
    <form className="designsForm">
        Name your design
        <input type="text" placeholder="Name"></input>
        Submit an image URL
        <input type="text" placeholder="Image"></input>
        Price of your design
        <input type="text" placeholder="Price"></input>
        </form>
        </div>
)
}

export default CreateDesigns;