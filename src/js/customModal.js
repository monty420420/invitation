import React, { useState, useRef } from 'react';
import '../css/customModal.css'

const CustomModal = ({ isOpen, scrollintro, scrollToExplanation, scrollHost, scrolCountDown, scrolInformation }) => {
  if (!isOpen) return null;

  return (
    <div className='modal'>
      <ul className='modal_lists'>
        <li className='modal_lists_list' onClick={scrollintro}>Intro</li>
        <li className='modal_lists_list' onClick={scrollToExplanation}>
          Explanation
        </li>
        <li className='modal_lists_list' onClick={scrollHost}>Host</li>
        <li className='modal_lists_list' onClick={scrolCountDown}>countDown</li>
        <li className='modal_lists_list' onClick={scrolInformation}>information</li>

      </ul>
    </div>
  );
};

export default CustomModal;