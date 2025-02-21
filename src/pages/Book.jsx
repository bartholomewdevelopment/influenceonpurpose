// Book.jsx
import React from "react";
import "../styles/Book.css";
import bookCover from "../assets/images/book.jpg";
import heroImage from "../assets/images/bookbanner.jpg";

const Book = () => {
  return (
    <section className="book-marketing">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="Influence on Purpose Banner" className="hero-image" />
      </div>

      {/* Main Content */}
      <div className="book-content">
        <div className="book-header">
          <h1>Influence on Purpose</h1>
          <h2>By John Baker with Comments from Rebekah Eyre</h2>
          <p className="availability">
            Available Now at Amazon, Barnes & Noble, and as an Audiobook on Audible
          </p>
        </div>

        <div className="book-details-container">
          <div className="book-image">
            <a
              href="https://www.amazon.com/Influence-Purpose-Principles-Regenerative-Cultures/dp/B0D2MDY6SC/ref=sr_1_1?crid=2JP1JUKD1X3IW&dib=eyJ2IjoiMSJ9.dMOVf_5VdPG1sPuSmnXjMw.2IVtS0KXTmO5GJHWa-ZB7rFc7xBnk0ZpLBRVu_c7aM8&dib_tag=se&keywords=influence+on+purpose+john+baker&qid=1717630819&sprefix=influence+on+pur%2Caps%2C287&sr=8-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={bookCover} alt="Influence on Purpose Book Cover" />
            </a>
          </div>
          <div className="book-details">
            <p className="main-description">
              Discover how to forge a regenerative culture in this essential leadership book.
              Decision-makers will learn actionable, principle-based strategies to enhance
              organizational integrity, energize teams, and achieve lasting results.
            </p>
            <h3>About the Book</h3>
            <p>
              The industrial revolution brought many benefits—efficiency, innovation, and wealth—but at a steep cost to people and the environment. John Baker, a seasoned leadership coach and avocational rancher, understands what it takes not only to survive in business and agriculture but to create a continual state of thriving.
            </p>
            <p>
              Enter regenerative culture: a sustainable, healing, and renewing approach to business that fosters cultures with a life of their own. In these cultures, energy is created, not destroyed. Regenerative culture empowers teams to develop their people and drive lasting results.
            </p>
            <p>
              <i>Influence on Purpose</i> offers a principle-driven practice, blending models and processes to help leaders build regenerative cultures for themselves and their stakeholders. Drawing on decades of experience, John provides a unique, actionable framework for businesses to establish a culture that vitalizes—rather than depletes—their most important asset: people.
            </p>
            <p>
              “If more farmers and ranchers practiced regenerative agriculture, it would heal the planet,” says John. “If more leaders cultivated regenerative organizations, it would heal our society.”
            </p>
            <p>
              Enhanced with shrewd insights from executive coach Rebekah Eyre, <i>Influence on Purpose</i> is a must-have for serious change agents and leaders across industries. Leaders of teams of any size will glean valuable knowledge, while fans of business leadership books like <i>The Speed of Trust</i>, <i>The 7 Habits of Highly Effective People</i>, and <i>The Earned Life</i> will enjoy discovering fresh, applicable concepts to transform their teams.
            </p>

            <div className="cta-buttons">
              <a
                href="https://www.amazon.com/Influence-Purpose-Principles-Regenerative-Cultures/dp/B0D2MDY6SC/ref=sr_1_1?crid=2JP1JUKD1X3IW&dib=eyJ2IjoiMSJ9.dMOVf_5VdPG1sPuSmnXjMw.2IVtS0KXTmO5GJHWa-ZB7rFc7xBnk0ZpLBRVu_c7aM8&dib_tag=se&keywords=influence+on+purpose+john+baker&qid=1717630819&sprefix=influence+on+pur%2Caps%2C287&sr=8-1"
                target="_blank"
                rel="noopener noreferrer"
                className="buy-btn"
              >
                Buy on Amazon
              </a>
              <a
                href="https://www.barnesandnoble.com/w/influence-on-purpose-john-baker/1145499683?ean=9798822942974"
                target="_blank"
                rel="noopener noreferrer"
                className="buy-btn"
              >
                Buy on Barnes & Noble
              </a>
              <a
                href="https://www.audible.com/pd/B0DXX7X2C7/?source_code=AUDFPWS0223189MWT-BK-ACX0-435213&ref=acx_bty_BK_ACX0_435213_rh_us"
                target="_blank"
                rel="noopener noreferrer"
                className="audible-btn"
              >
                Listen on Audible
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <h3>What People Are Saying</h3>
        <div className="testimonial-grid">
          <div className="testimonial-item">
            <blockquote>
              "John and Rebekah have captured the essence of having a successful enterprise for
              the long term. Regenerative thinking defines the platform for sustainable growth."
            </blockquote>
            <p>- Jon R. Tabor, Chairman and CEO, Allied Mineral Products, Inc.</p>
          </div>
          <div className="testimonial-item">
            <blockquote>
              "A clear method that will empower leaders to make real and sustainable change—a
              staple resource for any serious change agent."
            </blockquote>
            <p>- David Boss, PhD, Professor of Business Strategy and Leadership</p>
          </div>
          <div className="testimonial-item">
            <blockquote>
              "An easy-to-read book with real-life examples. I’m excited to apply these principles
              to build a regenerative culture within my team and company!"
            </blockquote>
            <p>- Ashley Pittenger, President, Foster Logistics, Robinson Investments</p>
          </div>
          <div className="testimonial-item">
            <blockquote>
              "A must-read for leaders looking to regenerate their culture with purpose and
              principles that enable high growth and engagement."
            </blockquote>
            <p>- Beth Thomas, Author of *Powered by Happy*, Founder/CEO of Change4Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;