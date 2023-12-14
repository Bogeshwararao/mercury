// Navigation.js
import React from 'react';
import './Navigation.css';

const Logo = () => (
  <div className="logo-container">
    <img
      src="https://framerusercontent.com/images/qmU7tgmwRQ3dXL9yHkp9GDxbrv0.svg"
      alt="Logo"
    />
    <p>Mercury</p>
  </div>
);

const NavMenuButton = ({ text }) => (
  <div className="nav-menu-button">
    <p>{text}</p>
  </div>
);

const RightSection = () => (
  <div className="right-section">
    <div className="login-button">
      <a href="#">Login</a>
    </div>
    <div className="lets-talk-button">
      <a href="#">Let's Talk</a>
    </div>
  </div>
);

const Navigation = () => (
  <div className="navigation-container">
    <Logo />
    <div className="nav-menu">
      <NavMenuButton text="Product" />
      <NavMenuButton text="Compare" />
      <NavMenuButton text="Pricing" />
      <NavMenuButton text="Contact" />
    </div>
    <RightSection />
  </div>
);

export default Navigation;
