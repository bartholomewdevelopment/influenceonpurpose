// Section2.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/Section2.css";
import bookImage from "../assets/images/book.jpg"; // Ensure correct path

const Section2 = () => {
  return (
    <section className="section2">
      {/* Book Image on the Left */}
      <div className="book-image">
        <img src={bookImage} alt="Book Cover" />
      </div>

      {/* Text & Button on the Right */}
      <div className="book-info">
        <h2>Now Available</h2>
        <p>
          In this foundational new Leadership Culture book, decision-makers will 
          learn to build a "Regenerative Culture" that allows organizations to achieve 
          greater results by strengthening organizational integrity through 
          principle-based leadership.
        </p>
        <Link to="/book" className="learn-more">Learn More</Link>
      </div>
    </section>
  );
};

export default Section2;