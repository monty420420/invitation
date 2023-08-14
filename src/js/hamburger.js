import '../css/hamburger.css'
import React, { useState } from 'react';
import CustomModal from './customModal';

function Hamburger() {
  const [isClicked, setIsClicked] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setIsClicked(!isClicked);
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className='toggle'>
      <div className={`hamburger ${isClicked ? 'clicked' : ''}`} onClick={toggleModal}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <CustomModal isOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} />
    </div>
  );
}

export default Hamburger;