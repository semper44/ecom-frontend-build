import React from 'react';

const Modal = ({ onClose, backgroundColor, children }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: backgroundColor,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          padding: '20px',
          backgroundColor: '#fff', // You can customize the modal content background color
        }}
      >
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
