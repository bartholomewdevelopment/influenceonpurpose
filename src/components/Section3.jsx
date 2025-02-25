import React, { useState } from "react";
import "../styles/Section3.css";
import johnBaker from "../assets/images/johnbakerbw.png"; // Relative path
import rebekah from "../assets/images/rebekahbw.jpg"; // Relative path

const Section3 = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Data objects for team members
  const johnData = {
    name: "John Baker",
    title: "Founder and Managing Partner",
    image: johnBaker,
    bio: `John is the Founder and Managing Partner of Influence On Purpose. He is a member of the Human Capital Institute and is a certified Master Human Capital Strategist.

Prior to Influence On Purpose, John served as the COO for Robinson Investments as well as Chief Human Capital Officer and Director of Leadership Development and Executive Coaching at Sequent.

"If you can't find the good in people, you are not qualified to lead them... if you can't do the first, you won't be able to do the second."`,
    linkedin: "https://www.linkedin.com/in/john-baker-41628a4/",
  };

  const rebekahData = {
    name: "Rebekah Eyre",
    title: "Leadership and Executive Coach",
    image: rebekah,
    bio: `Rebekah is a Leadership and Executive Coach with Influence On Purpose, holding a Graduate Certificate in Executive Coaching from American Public University System. She has a B.S. in Human Resource Management and a M.S. in Applied Linguistics.

A former Staff Sergeant of the U.S. Marine Corps, Rebekah is experienced in leading teams to achieve goals in stressful and complex environments. She is an expert at managing large-scale programs and advising senior leadership on adoption, training and implementation of initiatives. She has been recognized as a recipient of the Navy-Marine Corps Achievement Medal and speaks Intermediate Arabic.`,
    linkedin: "https://www.linkedin.com/in/rebekah-eyre-589741223/",
  };

  return (
    <section className="section3">
      {/* Meet the Team Header */}
      <h2 className="header">Meet the Team</h2>

      <div className="team-content">
        {/* John Baker Section */}
        <div className="team-member">
          <img src={johnBaker} alt="John Baker" className="team-img" />
          <div className="text-box">
            <h3>John Baker</h3>
            <h4>Founder and Managing Partner</h4>
            <p>
              John is a member of the Human Capital Institute and is a certified Master Human Capital Strategist.
            </p>
          </div>
          <div className="button-wrapper">
            <button
              className="hero-button"
              onClick={() => setSelectedMember(johnData)}
            >
              <span>Learn More</span>
              <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* Book Ad (CTA) Section */}
        <div className="cta">
          <p>Learn More</p>
          <p className="cta-description">
            If you are interested and want to learn more, we'd be happy to talk with you. Click below to book a free Discovery Call.
          </p>
          <div className="button-wrapper">
            <button className="cta-button">Book Now</button>
          </div>
        </div>

        {/* Rebekah Eyre Section */}
        <div className="team-member">
          <img src={rebekah} alt="Rebekah Eyre" className="team-img" />
          <div className="text-box">
            <h3>Rebekah Eyre</h3>
            <h4>Leadership and Executive Coach</h4>
            <p>
              Rebekah has a Graduate Certificate in Executive Coaching from American Public University System.
            </p>
          </div>
          <div className="button-wrapper">
            <button
              className="hero-button"
              onClick={() => setSelectedMember(rebekahData)}
            >
              <span>Learn More</span>
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Team Member Modal */}
      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          closeModal={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
};

const TeamMemberModal = ({ member, closeModal }) => {
  return (
    <div className="team-modal-overlay" onClick={closeModal}>
      <div className="team-modal" onClick={(e) => e.stopPropagation()}>
        <button className="team-modal-close" onClick={closeModal}>
          ✖
        </button>
        <img src={member.image} alt={member.name} className="team-modal-img" />
        <h2>{member.name}</h2>
        <h3>{member.title}</h3>
        <p>{member.bio}</p>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="team-modal-link"
        >
          View LinkedIn Profile
        </a>
      </div>
    </div>
  );
};

export default Section3;
