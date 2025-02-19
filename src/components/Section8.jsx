import React from "react";
import "../styles/Section8.css";

const Section8 = () => {
  return (
    <section className="section8">
      <h2>Where We Are Located</h2>
      <iframe
        title="Location Map"
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Section8;
