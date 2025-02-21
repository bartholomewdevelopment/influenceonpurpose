import React from 'react';
import '../styles/Section4.css';
import twoPeople from '../assets/images/twopeopleinoffice.jpg';

const Section4 = () => {
  return (
    <section className="section4">
      <div className="left-side">
        <img src={twoPeople} alt="Two adults working together" />
      </div>
      <div className="right-side">
        <h2>UNIVERSAL PRINCIPLES OF INFLUENCE</h2>
        <p className="quote">
          "Leadership is a principle of influence that unlocks the potential of every individual in a group focused on a common purpose."
        </p>
        <div className="principle">
          <span className="number">1</span>
          <div className="principle-content">
            <strong>TRUTH</strong>
            <p>The courage and humility to go beyond individual or group realities.</p>
          </div>
        </div>
        <div className="principle">
          <span className="number">2</span>
          <div className="principle-content">
            <strong>AGENCY</strong>
            <p>Understanding the power of choice, consequences and accountability.</p>
          </div>
        </div>
        <div className="principle">
          <span className="number">3</span>
          <div className="principle-content">
            <strong>LAW OF THE HARVEST</strong>
            <p>Applying sustained, focused effort and commitment to achieve desired outcomes.</p>
          </div>
        </div>
        <div className="principle">
          <span className="number">4</span>
          <div className="principle-content">
            <strong>LOVE</strong>
            <p>The power and importance of relationships, service and purpose.</p>
          </div>
        </div>
        <div className="principle">
          <span className="number">5</span>
          <div className="principle-content">
            <strong>CREATION</strong>
            <p>Creating value and solutions where there were none.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;