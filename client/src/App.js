import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import Shop from "./Shop"
import Login from "./Login"
import Signup from "./Signup"


function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const [shirts, setShirts] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          updateUser(user);
          // fetchShirts();
          
        });
      }
    })
  },[])

  // const fetchShirts = () => {
  //   fetch("/shirts")
  //   .then((res) => res.json())
  //   .then(res => {
  //     if(res.ok){
  //       res.json().then(setShirts)
  //     }else {
  //       res.json().then(data => setErrors(data.error))
  //     }
  //   })
  // }

  const updateUser = (user) => setCurrentUser(user)

  if(errors) return <h1>{errors}</h1>

  function logoutClick(){
    console.log("logout")
  }
  
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <div className="logoutButtonDiv">
          <button className="logoutButton" onClick={logoutClick}>Logout</button>
        </div>
      <NavBar />
      </header>
      <h1 className="siteHeader">Dan Flashes</h1>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/Shop"><Shop shirts={shirts} /></Route>
        <Route exact path="/Login"><Login updateUser={updateUser}/></Route>
        <Route exact path="/Signup"><Signup /></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
