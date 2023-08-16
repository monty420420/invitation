import React, { useState, useRef } from 'react';
import '../css/customModal.css'

const CustomModal = ({ isOpen, scrollintro, scrollToExplanation, scrollHost }) => {
  if (!isOpen) return null;

  return (
    <div className='modal'>
      <ul className='modal_lists'>
        <li className='modal_lists_list' onClick={scrollintro}>Intro</li>
        <li className='modal_lists_list' onClick={scrollToExplanation}>
          Explanation
        </li>
        <li className='modal_lists_list'onClick={scrollHost}>Host</li>
      </ul>
    </div>
  );
};

export default CustomModal;