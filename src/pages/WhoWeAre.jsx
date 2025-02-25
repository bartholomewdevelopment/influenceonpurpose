// components/WhoWeAre.jsx
import React from "react";
import "../styles/WhoWeAre.css";
import whoWeAreHero from "../assets/images/leadershipteamdevelopment.jpeg"; // Correct hero image
import treeImage from "../assets/images/treestepsdiagram.jpg"; // Correct image for Significance of a Name
import Section4 from "../components/Section4";
import Section3 from "../components/Section3";

const WhoWeAre = () => {
  return (
    <div className="who-we-are">
      {/* Hero Section */}
      <div
        className="who-we-are-hero"
        style={{ backgroundImage: `url(${whoWeAreHero})` }}
      >
        <div className="who-we-are-hero-overlay"></div>
        <h1 className="who-we-are-hero-text">Who We Are</h1>
      </div>

      {/* Significance of a Name */}
      <section className="significance-section">
        <div className="significance-content">
          <div className="significance-text">
            <h2>THE SIGNIFICANCE OF A NAME</h2>
            <p>
              Our name is derived from two fundamental concepts that guide the work we do in developing leaders.
            </p>
            <p>
              <strong>Influence:</strong> One of the primary rules of leadership is knowing the difference between control and influence. A leader who expects to control others in any way is destined to fail before they even start. This is manifest in many ways including micro-management, command and control style, manipulation, expecting compensation to drive behavior, etc. This is always a source of frustration and often why leaders get stuck.
            </p>
            <p>
              When it comes to our impact on outcomes through others, all we have is influence. Leadership coaching is largely a matter of identifying and acting on effective influence strategies. These can be behavioral, systemic or symbolic.
            </p>
            <p>
              <em>"On Purpose"</em> has two meanings; this is deliberate:
            </p>
            <p>
              First, on purpose means to be mission‑focused. Sustainable success as an individual or an organization is based on rooting core values in sound principles, a compelling vision that is motivating to all, and a mission that addresses the needs and expectations of all stakeholders. Having a well‑defined mission provides the transition from aspiration to strategy. Mission is another word for purpose. So, "Influence On Purpose" means to lead others in a way that helps them align with and engage in the mission of the company.
            </p>
            <p>
              Second, on purpose means deliberate or intentional. This meaning addresses another consistent source of frustration for leaders. Most people aren't sufficiently aware that they are always influencing those around them or what that influence contributes to. Too often influence is accidental or happenstance. "Influence On Purpose" means to be purposeful about your influence. Or, be aware of the effect you are having on others.
            </p>
            <p>
              The name of the company helps to describe the reason for and the impact of the work we do. Helping leaders identify effective influence strategies that align the efforts of their associates with the mission of the organization is at the core of creating a successful culture.
            </p>
            <p>We help you to Influence On Purpose.</p>
          </div>
          <div className="significance-image">
            <img src={treeImage} alt="Tree representing significance of a name" />
          </div>
        </div>
      </section>

      {/* The Living Tree Model */}
      <section className="living-tree-section">
        <h2>The Living Tree Model</h2>
        <p>
          The "Living Tree Model" of organizational design aligns your organization and guides you from aspirational goals to strategic execution.
        </p>
        <p>
          Transformative "Principles of Influence" create a regenerative culture that goes beyond sustainability. Regenerative culture brings energy and lift to an organization rather than burnout and depletion.
        </p>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/hOOHoLf0lNA" 
            title="The Living Tree Model Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Values</h2>
        <p>
          We believe that the values we hold dear are a critical part of what sets Influence On Purpose apart. Our uncompromising commitment to these values is reflected in every aspect of our lives and should be evident in every encounter with others.
        </p>
        <div className="values-list">
          <div className="value-item">
            <h3>Honesty</h3>
            <p>
              Complete and accurate information. Honesty requires humility, courage and respect – <em>Principle of Truth</em>
            </p>
          </div>
          <div className="value-item">
            <h3>Relationships</h3>
            <p>
              People are of divine worth and origin. We strive to be generous and committed to mutual benefit – <em>Principle of Love</em>
            </p>
          </div>
          <div className="value-item">
            <h3>Work Ethic</h3>
            <p>
              Driven to get results through sustained, focused effort. – <em>Principle of Law of the Harvest</em>
            </p>
          </div>
          <div className="value-item">
            <h3>Choice</h3>
            <p>
              We understand the difference between influence and control. We strive to be an influence for good. – <em>Principle of Agency</em>
            </p>
          </div>
          <div className="value-item">
            <h3>Innovation</h3>
            <p>
              Always learning, growing, and adding value. Exercising faith and an abundance mentality. – <em>Principle of Creation</em>
            </p>
          </div>
        </div>
      </section>

           {/* Mission Section */}
           <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          We create winning relationships for all stakeholders—not as divisions or units, but as people. Unlocking greater fulfillment and accomplishments for those we serve enables our clients to do the same with their stakeholders.
        </p>
        <p>
          We provide opportunities for our associates to do well by doing good across every spectrum of our lives, acting as a force for good throughout the communities we serve.
        </p>
        <p>
          "Doing well and doing good are inextricably linked."
        </p>
        <p>
          Our mission is to help leaders create and leverage healthy cultures that provide a powerful sense of purpose and a passion for accomplishing their goals.
        </p>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>Regenerative cultures will heal our society.</p>
      </section>


      {/* Previously Used Sections */}
      <Section4 />
      <Section3 />
    </div>
  );
};

export default WhoWeAre;
