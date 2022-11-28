import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from "./NavBar"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="logoutButton" >Logout</button>
      <NavBar />
      </header>
      <h1 className="siteHeader">Dan Flashes</h1>
    </div>
  );
}

export default App;
