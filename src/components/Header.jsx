import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Header.css";
import logo from "../assets/logos/iopwhitelogo.png";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        {/* Logo Next to Navbar */}
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Influence on Purpose" className="logo-img" />
          </Link>
        </div>

        {/* Thin, Rounded Navbar */}
        <nav className="navbar navbar-expand-lg bg-light-green rounded-navbar">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/book">
                  Book
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/what-we-do">
                  What We Do
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/who-we-are">
                  Who We Are
                </Link>
              </li>
              {/* Dropdown for More */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="moreDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/resources">
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* LinkedIn Icon (Top Right) */}
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-icon"
      >
        <i className="bi bi-linkedin"></i>
      </a>
    </header>
  );
};

export default Header;