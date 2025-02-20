import React from "react";
import "../styles/Section1.css";
import treeImage from "../assets/images/tree.png";

const Section1 = () => {
  return (
    <section className="section1">
      {/* Left side: Text Content */}
      <div className="text-box">
        <p>
          The "Living Tree Model" of organizational design aligns your organization and guides you from aspirational goals to strategic execution. 
        </p>
        <p>
          Transformative "Principles of Influence" create a regenerative culture that goes beyond sustainability. Regenerative culture brings energy and lift to an organization rather than burnout and depletion.
        </p>
      </div>

      {/* Right side: Image */}
      <div className="image-box">
        <img src={treeImage} alt="Tree" />
      </div>
    </section>
  );
};

export default Section1;