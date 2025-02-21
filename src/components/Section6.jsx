// Section6.jsx
import React, { useState, useEffect } from "react";
import "../styles/Section6.css";

const testimonials = [
  {
    quote: "John is an excellent executive and communications coach. Not only is he a subject matter expert, but also an embodiment of humility and integrity. This combination makes people respect and trust him. I would recommend him highly for any individual or organization interested in improving their communication and leadership skills.",
    author: "Vasan Venkatramat",
    title: "Manufacturing Designer, Apple"
  },
  {
    quote: "John is an extremely gifted executive coach. He is intuitive, direct, yet always respectful in his approach and influential in helping others achieve the results they want or need. I’ve observed many clients, as well as employees at all levels, improve their leadership skills as a result of John’s influence. John is also an outstanding group facilitator. His genuineness very quickly removes barriers within a group and encourages people to engage in ways that optimize the session’s objectives. Complimenting his leadership and technical competence, John models honor in everything he does and consistently demonstrates uncompromising values. He truly leads by example.",
    author: "Jackie Bovinet",
    title: "Former VP HR, Sequent"
  },
  {
    quote: "John is a consultant that our company places in the highest regard. He has been integral to the growth and development of our people, and the resulting growth in our business. He always does what he says he will do, and his involvement has allowed our senior team to collaborate on a deeper level. In summary, we believe John's participation in our business always makes us 'smarter'.",
    author: "Todd Henry",
    title: "CFO, Allied Mineral Products"
  },
  {
    quote: "I have taken several classes from John Baker and have also had the opportunity to receive professional coaching from him. John is a values based person with the highest integrity. I have to say that John is one of the 'clearest thinking' people that I know. He is very principle driven and motivates others to practice the same. I look at him as one of my greatest mentors.",
    author: "Shawn Dodson",
    title: "Chief Operating Officer, D-Terra"
  }
];

const Section6 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000); // 10 seconds rotation
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section6">
      <div className="book-now-container">
        <a href="#booking" className="book-now-link">Book Now</a>
        <p className="book-now-info">Schedule your consultation today</p>
      </div>
      <div className="testimonials-container">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <blockquote>{testimonials[index].quote}</blockquote>
          <p className="author">- {testimonials[index].author}</p>
          <p className="title">{testimonials[index].title}</p>
        </div>
      </div>
    </section>
  );
};

export default Section6;