import React, { useState } from 'react';
import './Header.css';
import LoginModal from './LoginModal';
import LogoutModal from './LogoutModal';
import AboutModal from './AboutModal';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

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
    setShowLogoutModal(true);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <i className="fa-solid fa-shop"></i>
        <span>Big Web Dev Shop</span>
      </div>
      <nav className="header-nav">
        <a href="#" onClick={() => setShowAboutModal(true)}>ABOUT</a>
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
      {showLogoutModal && <LogoutModal onClose={() => setShowLogoutModal(false)} />}
      {showAboutModal && <AboutModal onClose={() => setShowAboutModal(false)} />}
    </header>
  );
};

export default Header;
