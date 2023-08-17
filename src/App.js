import React, { useState, useRef } from 'react';
import './App.css';
import Intro from './js/intro.js';
import "./font/font.css";
import Hamburger from './js/hamburger.js';
import Explanation from './js/explanation.js';
import Host from './js/host.js';
import CountDown from './js/countDown.js';

function App() {
  

   
  return (
    <div className="App">
      <Hamburger/>
      <Intro/>
      <Explanation/>
      <Host/>
      <CountDown/>
    </div>
  );
}

export default App;
