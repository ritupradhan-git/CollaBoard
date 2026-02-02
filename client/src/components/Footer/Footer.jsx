import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} CollabBoard Inc.
        </div>

        <div className="footer-links">
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
          <a href="#">Discord</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
