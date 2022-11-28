import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar"


function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <button className="logoutButton" >Logout</button>
      <NavBar />
      </header>
      <h1 className="siteHeader">Dan Flashes</h1>
      </Router>
    </div>
  );
}

export default App;
