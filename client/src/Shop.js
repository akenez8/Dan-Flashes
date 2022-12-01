import React, {useState, useEffect} from "react";
import ShirtCard from "./ShirtCard"
function Shop(){
    const [shirts, setShirts] = useState([])
    
    useEffect(() => {
        fetch("/shirts")
        .then((res) => res.json())
        .then((data) => setShirts(data))
    
        const user = sessionStorage.getItem('user')
      },[])

     
      const shirtCard = shirts.map((shirt) => {
        return <ShirtCard name={shirt.name} image={shirt.image} price={shirt.price}/>
      }
      )
   
      return(
    <div className="shopDiv">
        <p>AYYYYY HOW YA DOIN BUY SOME SHIRTS EH?</p>
        <p className="shirtCards">{shirtCard}</p>
        </div>
        
    
    )
}

export default Shop;