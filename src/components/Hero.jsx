// components/Hero.jsx
import React from "react";
import "../styles/Hero.css";
import heroImage from "../assets/images/hero.png"; // Ensure correct path

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-left">
        <h1>Regenerative Culture, Strategy & Leadership Development</h1>
        <button className="hero-button">
            <span>Learn More</span>
            <span className="arrow">→</span>
        </button>


      </div>
    </section>
  );
};

export default Hero;
