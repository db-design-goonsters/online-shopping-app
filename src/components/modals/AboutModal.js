import React from 'react';
import './AboutModal.css';

const AboutModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-modal" onClick={onClose}>×</button>
        <div className="modal-content">
          <p className="description">Description: This is an online shopping app</p>
          <p className="developers">Developers: Anagh Mishra, Oscar Cronin, and Ary Sharma</p>
          <div className="modal-footer">
            <p>Big Database Guys &copy;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
