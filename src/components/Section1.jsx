import React, { useEffect, useRef } from "react";
import "../styles/Section1.css";
import treeImage from "../assets/images/tree.png";

const Section1 = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const section = imageRef.current.closest(".section1");
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const scrollOffset = (window.innerHeight - rect.top) * 0.2; // Parallax effect strength
        imageRef.current.style.transform = `translateY(${scrollOffset}px)`;
      }
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
        <img ref={imageRef} src={treeImage} alt="Tree" />
      </div>
    </section>
  );
};

export default Section1;
