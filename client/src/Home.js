import React, {useState} from "react";

function Home({currentUser}){
    const [picture, setPicture] = useState(true)

    function pictureClick(){
        setPicture((prev) => !prev)
    }
return(
    <div className="homeDiv">
        {currentUser ? <p className="homeTitle">Welcome, {currentUser.name}</p> : null}
        {picture ? <img onClick={pictureClick} className="homeImg" src="https://i.etsystatic.com/16633833/r/il/92bb16/4163262389/il_570xN.4163262389_dy0s.jpg" alt="img1"></img> : <img onClick={pictureClick} className="homeImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUqG_4tNyA61GxTRXo30YZOswRb2ty1GB3Q&usqp=CAU" alt="img2"></img>}
        <p className="homeDescription">I mean, you walk by a store and you see 50 guys who look just like you fighting over very complicated shirts, you go in. Yes you do. You go in.</p>
        </div>
    
)
}

export default Home