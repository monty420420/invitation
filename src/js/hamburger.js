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
  const closeModal = () => {
    setIsClicked(false);
    setModalIsOpen(false);
  };

  const scrollintro = () => {
    closeModal(); // 모달 닫기
    const introMove = document.getElementById('intro');
    if (introMove) {
      introMove.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  const scrollToExplanation = () => {
    closeModal(); // 모달 닫기
    const explanationMove = document.getElementById('explanation'); 
    if (explanationMove) {
      explanationMove.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  };
  const scrollHost= () => {
    closeModal(); // 모달 닫기
    const hostMove = document.getElementById('host');
    if (hostMove) {
      hostMove.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
  const scrolCountDown= () => {
    closeModal(); // 모달 닫기
    const countMove = document.getElementById('countDown');
    if (countMove) {
      countMove.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
  const scrolInformation= () => {
    closeModal(); // 모달 닫기
    const infoMove = document.getElementById('information');
    if (infoMove) {
      infoMove.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  return (
    <div className='toggle'>
      <div className={`hamburger ${isClicked ? 'clicked' : ''}`} onClick={toggleModal}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <CustomModal isOpen={modalIsOpen} closeModal={closeModal} scrollintro={scrollintro} scrollToExplanation={scrollToExplanation} scrollHost={scrollHost} scrolCountDown={scrolCountDown} scrolInformation={scrolInformation}/>
    </div>
  );
}

export default Hamburger;