import '../css/hamburger.css'
import React, { useState } from 'react';

function Hamburger(){
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={`hamburger ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
     <span className="bar"></span>
     <span className="bar"></span>
     <span className="bar"></span>
   </div>
  )
}

export default Hamburger;