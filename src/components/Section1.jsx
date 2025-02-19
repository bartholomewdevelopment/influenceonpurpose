// components/Section1.jsx
import React from "react";
import "../styles/Section1.css";
import treeImage from "../assets/images/tree.png";

const Section1 = () => {
  return (
    <section className="section1">
      <div className="text-box">
        <p>
          The "Living Tree Model" of organizational design aligns your
          organization and guides you from aspirational goals to strategic
          execution...
        </p>
      </div>
      <div className="image-box">
        <img src={treeImage} alt="Tree" />
      </div>
    </section>
  );
};

export default Section1;
