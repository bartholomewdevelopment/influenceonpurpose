// components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-container">
        <div className="hero-left">
          <h1>Regenerative Culture, Strategy & Leadership Development</h1>
          <Link to="/what-we-do" style={{ textDecoration: "none" }}>
            <button className="hero-button">
              <span>Learn More</span>
              <span className="arrow">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;