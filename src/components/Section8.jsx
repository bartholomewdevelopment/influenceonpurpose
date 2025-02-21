// Section8.jsx
import React from "react";
import "../styles/Section8.css";

const Section8 = () => {
  return (
    <section className="section8">
      <h2>OUR LOCATION</h2>
      <iframe
        className="map-container"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.535942676082!2d-82.171518!3d39.468676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88487b4f4a8f7b1b%3A0x7e8f8b8e8f8e8f8e!2s39240%20State%20Route%2056%2C%20Nelsonville%2C%20OH%2045764!5e0!3m2!1sen!2sus!4v1677654321"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Section8;