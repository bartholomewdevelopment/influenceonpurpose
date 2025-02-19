import React, { useState, useEffect } from "react";
import "../styles/Section6.css";

const testimonials = [
  "John is an excellent executive and communications coach...",
  "John is an extremely gifted executive coach...",
  "John is a consultant that our company places in the highest regard...",
  "I have taken several classes from John Baker...",
];

const Section6 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000); // Slowed down from previous 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section6">
      <h2>Testimonials</h2>
      <p>{testimonials[index]}</p>
    </section>
  );
};

export default Section6;
