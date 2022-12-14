import React, {useState, useEffect} from "react";
import ShirtCard from "./ShirtCard"
function Shop({userAddPurchase, currentUser}){
    const [shirts, setShirts] = useState([])
    
    useEffect(() => {
        fetch("/shirts")
        .then((res) => res.json())
        .then((data) => setShirts(data))
    
        const user = sessionStorage.getItem('user')
      },[])

     
      const shirtCard = shirts.map((shirt) => {
        return <ShirtCard currentUser={currentUser} userAddPurchase={userAddPurchase} id={shirt.id} name={shirt.name} image={shirt.image} price={shirt.price}/>
      }
      )
   
      return(
    <div className="shopDiv">
        <p id="shopText">The More Complicated the Pattern, the higher the price. We don't make the rules, we just follow them.</p>
        <p className="shirtCards">{shirtCard}</p>
        </div>
        
    
    )
}

export default Shop;