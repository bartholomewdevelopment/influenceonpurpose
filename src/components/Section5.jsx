import React from "react";
import { Link } from "react-router-dom";
import "../styles/Section5.css";
import oneonone from "../assets/images/oneonone.jpeg";
import execTeam from "../assets/images/executiveteamcoaching.jpeg";
import emerging from "../assets/images/emergingleaders.jpeg";
import regenerative from "../assets/images/regenerativeculture.jpeg";

const options = [
  { src: oneonone, caption: "One on One Executive Coaching" },
  { src: execTeam, caption: "Executive Team Coaching" },
  { src: emerging, caption: "Emerging Leaders Group Coaching" },
  { src: regenerative, caption: "Regenerative Culture Development" },
];

const Section5 = () => {
  return (
    <section className="section5">
      <h2 className="header">What You Receive</h2>
      <div className="content-wrapper">
        <div className="options-grid">
          {options.map((option, index) => (
            <div key={index} className="option">
              <div
                className="squiggly-frame"
                style={{
                  backgroundImage: `url(${option.src})`,
                  backgroundPosition:
                    option.src === oneonone ? "center top" : "center center",
                }}
              >
                <svg viewBox="0 0 300 300" preserveAspectRatio="none">
                  <path
                    d="M10,10 Q75,0 150,10 T290,10 Q300,75 290,150 T290,290 Q225,300 150,290 T10,290 Q0,225 10,150 T10,10"
                    fill="none"
                    stroke="#8f9c57"
                    strokeWidth="6"
                  />
                </svg>
              </div>
              <div className="caption">{option.caption}</div>
              <Link to="/what-we-do">
                <button className="hero-button">
                  <span>Learn More</span>
                  <span className="arrow">→</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;
