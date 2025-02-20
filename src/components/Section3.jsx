import React from "react";
import "../styles/Section3.css";
import johnBaker from "../assets/images/johnbakerbw.png"; // Relative path
import rebekah from "../assets/images/rebekahbw.jpg";    // Relative path

const Section3 = () => {
  return (
    <section className="section3">
      {/* Meet the Team Header */}
      <h2 className="header">Meet the Team</h2>

      <div className="team-content">
        {/* John Baker Section */}
        <div className="team-member">
          <img src={johnBaker} alt="John Baker" className="team-img" />
          <div className="text-box">
            <h3>John Baker</h3>
            <h4>Founder and Managing Partner</h4>
            <p>
              John is the Founder and Managing Partner of Influence On Purpose. 
              He is a member of the Human Capital Institute and is a certified Master Human Capital Strategist.
            </p>
          </div>
          <div className="button-wrapper">
            <button className="hero-button">
              <span>Learn More</span>
              <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* Book Ad (CTA) Section */}
        <div className="cta">
          <p>Learn More</p>
          <p className="cta-description">
            If you are interested and want to learn more, we'd be happy to talk with you. Click below to book a free Discovery Call
          </p>
          <div className="button-wrapper">
            <button className="cta-button">Book Now</button>
          </div>
        </div>

        {/* Rebekah Eyre Section */}
        <div className="team-member">
          <img src={rebekah} alt="Rebekah Eyre" className="team-img" />
          <div className="text-box">
            <h3>Rebekah Eyre</h3>
            <h4>Leadership and Executive Coach</h4>
            <p>
              Rebekah is a Leadership and Executive Coach with Influence On Purpose 
              with a Graduate Certificate in Executive Coaching from American Public University System.
            </p>
          </div>
          <div className="button-wrapper">
            <button className="hero-button">
              <span>Learn More</span>
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;