import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import Shop from "./Shop"
import Login from "./Login"
import Signup from "./Signup"
import UserShirts from "./UserShirts"


function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const [errors, setErrors] = useState(false)
  const [purchases, setPurchases] = useState([])
  const [fetchedData, setFetchedData] = useState(false)
  const updateUser = (user) => setCurrentUser(user)

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          updateUser(user);

        });
      }
    })
  },[])
  
  useEffect(() => {
    fetch("/purchases")
    .then((res) => res.json())
    .then((data) => setPurchases(data))
  },[fetchedData])


  function userAddPurchase(id, price){
    setFetchedData(true)
    const newObj = {
      user_id: currentUser.id,
      shirt_id: id,
      price: parseInt(price)
    }
    console.log(newObj)
    const requestOptions = {
    method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newObj)
    };
    fetch('/purchases', requestOptions)
        .then(response => response.json())
        .then(data => setFetchedData(false));
     }

     function deletePurchase(id){
      console.log("deleting...")
      setFetchedData(true)
      const requestOptions = {
        method: 'DELETE'
      };
      fetch(`/purchases/${id}`, requestOptions)
      .then(() => setFetchedData(false))
    }


    function userUpdatePurchase(id, name){
      setFetchedData(true)
      const requestOptions = {
        method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name:name})
        };
        fetch(`/rentals/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => setFetchedData(false));
         }
  if(errors) return <h1>{errors}</h1>

  
  return (
    <div className="App">
      <Router>
      <header className="App-header">
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </header>
      <h1 className="siteHeader">Dan Flashes</h1>
      <Switch>
        <Route exact path="/"><Home currentUser={currentUser}/></Route>
        <Route exact path="/Shop"><Shop userAddPurchase={userAddPurchase} currentUser={currentUser}/></Route>
        <Route exact path="/Login"><Login updateUser={updateUser}/></Route>
        <Route exact path="/SignUp"><Signup updateUser={updateUser} /></Route>
        <Route exact path="/MyShirts"><UserShirts userUpdatePurchase={userUpdatePurchase} deletePurchase={deletePurchase} purchases={purchases} currentUser={currentUser}/></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
