import React, { useState } from 'react';
import './App.css';
import Intro from './js/intro.js';
import "./font/font.css";
import Hamburger from './js/hamburger';

function App() {

  return (
    <div className="App">
      <Hamburger/>
      <Intro/>
    </div>
  );
}

export default App;
