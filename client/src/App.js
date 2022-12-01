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
  const [logout, setLogout] = useState("");


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
    const currentUser = sessionStorage.getItem('user')
    if(currentUser){
      setCurrentUser(JSON.parse(currentUser))
    }
  }, []);
  
  const handleLogout = () => {
    fetch(`/logout`, {
      method:"DELETE"
    })
    .then(res =>{
      if(res.ok){
        updateUser(false)
      }
    })
  }
 

  const updateUser = (user) => setCurrentUser(user)

  if(errors) return <h1>{errors}</h1>

  function testClick(){
    console.log({currentUser})
  }
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <div className="logoutButtonDiv">
        { currentUser ? <button className="logoutButton" onClick={handleLogout}>Logout</button> : null}
        <button onClick={testClick}>test</button>
        </div>
      <NavBar />
      </header>
      <h1 className="siteHeader">Dan Flashes</h1>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/Shop"><Shop shirts={shirts} /></Route>
        <Route exact path="/Login"><Login updateUser={updateUser}/></Route>
        <Route exact path="/SignUp"><Signup updateUser={updateUser} /></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
