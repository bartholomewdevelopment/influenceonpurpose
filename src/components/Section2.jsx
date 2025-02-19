import React from "react";
import "../styles/Section2.css";
import bookImage from "../assets/images/book.jpg"; // Ensure correct path

const Section2 = () => {
  return (
    <section className="section2">
      <div className="book-image">
        <img src={bookImage} alt="Book Cover" />
      </div>
      <div className="book-info">
        <h2>Now Available</h2>
        <p>
          In this foundational new leadership culture book, decision makers will
          learn to build a regenerative culture...
        </p>
        <button className="learn-more">Learn More</button>
      </div>
    </section>
  );
};

export default Section2;
