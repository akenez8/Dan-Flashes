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
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <button className="logoutButton" >Logout</button>
      <NavBar />
      </header>
      <h1 className="siteHeader">Dan Flashes</h1>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/Shop"><Shop /></Route>
        <Route exact path="/Login"><Login /></Route>
        <Route exact path="/Signup"><Signup /></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
