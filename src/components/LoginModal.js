import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose, onLogin }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    accountBalance: '',
    shippingAddress: '',
    warehouseId: '',
    adminName: '',
    adminAddress: '',
    adminSalary: '',
    adminTitle: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdminToggle = () => {
    setIsAdmin(!isAdmin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here
    console.log(formData);
    onLogin();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Login:</h2>
        <label>
          Admin?
          <input type="checkbox" checked={isAdmin} onChange={handleAdminToggle} />
        </label>
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={formData.username}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="accountBalance" 
          placeholder="Account Balance" 
          value={formData.accountBalance}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="shippingAddress" 
          placeholder="Shipping Address" 
          value={formData.shippingAddress}
          onChange={handleChange}
        />
        {isAdmin && (
          <>
            <input 
              type="text" 
              name="warehouseId" 
              placeholder="Warehouse ID" 
              value={formData.warehouseId}
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="adminName" 
              placeholder="Admin Name" 
              value={formData.adminName}
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="adminAddress" 
              placeholder="Admin Address" 
              value={formData.adminAddress}
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="adminSalary" 
              placeholder="Admin Salary" 
              value={formData.adminSalary}
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="adminTitle" 
              placeholder="Admin Title" 
              value={formData.adminTitle}
              onChange={handleChange}
            />
          </>
        )}
        <button onClick={handleSubmit}>SIGN IN</button>
        <div className="signup-link">
          Need an account? <a href="#">SIGN UP</a>
        </div>
        <button className="close-modal" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginModal;
