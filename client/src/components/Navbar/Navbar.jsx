import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Side: Logo */}
        <div className="navbar-logo">
          <div className="logo-icon"></div>
          <Link to={'/'} className="logo-text">
            Collaboard
          </Link>
        </div>

        {/* Right Side: Login Button */}
        <div className="navbar-actions">
          <Link to="/login" className="btn-login">
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
