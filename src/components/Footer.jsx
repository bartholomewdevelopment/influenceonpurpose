import React from "react";
import "../styles/Footer.css"; // Import Footer styles
import logo from "../assets/logos/iopwhitelogo.png"; // Ensure correct path

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Blank Section */}
        <div className="footer-section"></div>

        {/* Left Side: Logo & Copyright */}
        <div className="footer-section left">
          <img src={logo} alt="Influence on Purpose" className="footer-logo" />
          <p className="copyright">&copy; 2024 Influence on Purpose. All rights reserved.</p>
        </div>

        {/* Right Side: Social Media & Email */}
        <div className="footer-section right">
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <p className="footer-email">contact@influenceonpurpose.com</p>
        </div>

        {/* Right Blank Section */}
        <div className="footer-section"></div>
      </div>
    </footer>
  );
};

export default Footer;
