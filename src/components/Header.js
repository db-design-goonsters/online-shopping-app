import React, { useState } from 'react';
import './Header.css';
import LoginModal from './modals/LoginModal';
import AboutModal from './modals/AboutModal';

const Header = ({ isLoggedIn, isAdmin, onLogin, onLogout }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const handleProfileClick = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    }
  };

  const handleLogin = (username, isAdmin, adminName) => {
    onLogin(username, isAdmin, adminName);
    setShowLoginModal(false);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <i className="fa-solid fa-shop"></i>
        <span>Big Web Dev Shop</span>
      </div>
      <nav className="header-nav">
        <a href="#" onClick={() => setShowAboutModal(true)}>ABOUT</a>
        {isLoggedIn && isAdmin && <a href="#">ADMIN TOOLS</a>}
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
              <a href="#" onClick={onLogout}>Logout</a>
            </div>
          )}
        </div>
      </div>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} onLogin={handleLogin} />}
      {showAboutModal && <AboutModal onClose={() => setShowAboutModal(false)} />}
    </header>
  );
};

export default Header;
