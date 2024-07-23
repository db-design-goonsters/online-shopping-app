import React, { useState } from 'react';
import './Header.css';
import LoginModal from './LoginModal';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleProfileClick = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <i className="fa-solid fa-shop"></i>
        <span>eCommerce</span>
      </div>
      <nav className="header-nav">
        <a href="#">ABOUT</a>
        {isLoggedIn && <a href="#">ADMIN TOOLS</a>}
      </nav>
      <div className="header-search-cart">
        <input type="text" placeholder="Search..." />
        <i className="fa fa-search"></i>
        <i className="fa fa-shopping-cart"></i>
        <div className="header-profile" onClick={handleProfileClick}>
          <i className="fa fa-user"></i>
          {isLoggedIn && (
            <div className="profile-dropdown">
              <a href="#">User Profile</a>
              <a href="#" onClick={handleLogout}>Logout</a>
            </div>
          )}
        </div>
      </div>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} onLogin={handleLogin} />}
    </header>
  );
};

export default Header;
