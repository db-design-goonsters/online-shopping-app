import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <i class="fa-solid fa-shop"></i>
        <span>Big Web Dev Store</span>
      </div>
      <nav className="header-nav">
        <a href="#">ABOUT</a>
        <a href="#">ADMIN</a>
        <a href="#">TOOLS</a>
      </nav>
      <div className="header-search-cart">
        <input type="text" placeholder="Search..." />
        <i className="fa fa-search"></i>
        <i className="fa fa-shopping-cart"></i>
        <div className="header-profile">
          <span>A</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
