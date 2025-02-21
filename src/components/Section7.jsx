// Section7.jsx
import React from "react";
import "../styles/Section7.css";

// Import all logo images
import harleyLogo from "../assets/logos/harley.png";
import nationwideLogo from "../assets/logos/nationwide.png";
import nisourceLogo from "../assets/logos/nisource.png";
import hockingLogo from "../assets/logos/hocking.webp";
import designLogo from "../assets/logos/design.png";
import cpoLogo from "../assets/logos/cpo.png";
import robinsonLogo from "../assets/logos/robinson.png";
import guitarLogo from "../assets/logos/guitar.png";

const Section7 = () => {
  return (
    <section className="section7">
      <h2>OUR VALUED CLIENTS</h2>
      <div className="logos-container">
        <div className="logo-row">
          <img src={harleyLogo} alt="Harley" className="client-logo" />
          <img src={nationwideLogo} alt="Nationwide" className="client-logo" />
          <img src={nisourceLogo} alt="NiSource" className="client-logo" />
          <img src={hockingLogo} alt="Hocking" className="client-logo" />
        </div>
        <div className="logo-row">
          <img src={designLogo} alt="Design" className="client-logo" />
          <img src={cpoLogo} alt="CPO" className="client-logo" />
          <img src={robinsonLogo} alt="Robinson" className="client-logo" />
          <img src={guitarLogo} alt="Guitar" className="client-logo" />
        </div>
      </div>
    </section>
  );
};

export default Section7;