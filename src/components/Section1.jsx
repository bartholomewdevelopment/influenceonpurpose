// components/Section1.jsx
import React, { useEffect } from "react";
import "../styles/Section1.css";
import treeImage from "../assets/images/tree.png";

const Section1 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      document.documentElement.style.setProperty("--scroll", scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="section1">
      <div className="text-box">
        <p>
          The "Living Tree Model" of organizational design aligns your organization and guides you from aspirational goals to strategic execution. 
          <br /><br />
          Transformative "Principles of Influence" create a regenerative culture that goes beyond sustainability. Regenerative culture brings energy and lift to an organization rather than burnout and depletion.
        </p>
      </div>
      <div className="image-box">
        <img src={treeImage} alt="Tree" />
      </div>
    </section>
  );
};

export default Section1;
