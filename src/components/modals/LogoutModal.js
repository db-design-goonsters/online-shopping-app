import React, { useEffect } from 'react';
import './LogoutModal.css';

const LogoutModal = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [onClose]);

  return (
    <div className="logout-modal-overlay">
      <div className="logout-modal">
        <p>You have been successfully logged out</p>
      </div>
    </div>
  );
};

export default LogoutModal;
