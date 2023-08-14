import React from 'react';
import '../css/customModal.css'

const CustomModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; // 모달이 열리지 않았을 때는 렌더링하지 않음
  return (
    <div className='modal'></div>
  );
};

export default CustomModal;