import React from "react";
import "../styles/Section3.css";
import JohnBaker from "../assets/images/JohnBaker.png";

const Section3 = () => {
  return (
    <section className="section3">
      <h2 className="header">Meet the Team</h2>
      <div className="team-content">
        <div className="team-member">
          <h3>John Baker</h3>
          <p>Founder and Managing Partner of Influence On Purpose...</p>
          <img src={JohnBaker} alt="John Baker" />
        </div>
        <div className="cta">
          <p>Interested? Book a Discovery Call</p>
          <button>Book Now</button>
        </div>
        <div className="team-member">
          <h3>Rebekah Eyre</h3>
          <p>Leadership and Executive coach...</p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
