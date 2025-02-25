import { useState, useEffect } from "react";
import "../styles/WhatWeDo.css";
import oneonone from "../assets/images/oneonone.jpeg";
import execTeam from "../assets/images/executiveteamcoaching.jpeg";
import emerging from "../assets/images/emergingleaders.jpeg";
import regenerative from "../assets/images/regenerativeculture.jpeg";

const services = [
  {
    title: "Executive Coaching",
    brief:
      "Leveraging a process-driven approach that moves from assessment through sustaining, we bring insight to leaders that allow their influence to unlock the power within their organizations.",
    detailed: `40% of new leaders don't make it past the first 18 months. The top reasons are failure to engage stakeholders, align teams, drive results, and adapt. The Influence On Purpose coaching process addresses each of these areas along with others identified in the assessment process.`,
    calendly: "https://calendly.com/johniop/discovery-call",
    image: oneonone,
  },
  {
    title: "Culture Strategy and Development",
    brief:
      "Assessing the current health of the culture and crafting a plan based on the Living Tree Model to align the organization both structurally and culturally to fulfill their mission for all stakeholders.",
    detailed: `A data-driven comprehensive review of all stakeholders, assessing their needs and aligning the organization’s cultural and structural framework for maximum impact.`,
    calendly: "https://calendly.com/rebekah-iop/15-minute-meeting",
    image: regenerative,
  },
  {
    title: "Executive Team Coaching",
    brief:
      "Building on the foundation of the Principles of Influence and the Living Tree Model, we follow the same process of assess, brainstorm, outline and develop in regards to specific curriculum needed to develop the critical skills and alignment to deliver on your mission for all stakeholders.",
    detailed: `Guided by a master facilitator, our team coaching program ensures effective execution through candor, collaboration, and accountability, fostering productive dysfunction to improve alignment and performance.`,
    calendly: "https://calendly.com/johniop/discovery-call",
    image: execTeam,
  },
  {
    title: "Emerging Leaders Group Coaching",
    brief:
      "Invest in the future of your company by investing in your future leaders. Give your emerging leaders and high-potential managers the skills and support they need to succeed and build the regenerative culture your organization needs.",
    detailed: `Our program equips emerging leaders with skills in execution, collaboration, and accountability to foster an environment of growth and strong leadership for the future.`,
    calendly: "https://calendly.com/rebekah-iop/15-minute-meeting",
    image: emerging,
  },
];

const WhatWeDo = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Allow closing modal with Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setSelectedService(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="what-we-do-container">
      {/* Hero Section */}
      <section className="what-we-do-hero">
        <div className="what-we-do-hero-overlay"></div>
        <h1 className="what-we-do-hero-text">OUR SERVICE TO YOU</h1>
      </section>

      {/* Intro Header */}
      <section className="what-we-do-intro">
        <h2 className="what-we-do-intro-title">Coaching You to Build a Regenerative Culture</h2>
        <p className="what-we-do-intro-text">
          Our tailored services blend executive coaching, culture strategy, and team development to unlock potential and drive transformational change.
        </p>
      </section>

      {/* Services Section */}
      <section className="what-we-do-services">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} openModal={setSelectedService} />
        ))}
      </section>

      {/* Modal */}
      {selectedService && (
        <ServiceModal service={selectedService} closeModal={() => setSelectedService(null)} />
      )}
    </div>
  );
};

const ServiceCard = ({ service, openModal }) => {
  return (
    <article className="what-we-do-card">
      <img 
        src={service.image} 
        alt={service.title} 
        className="what-we-do-card-image"
        style={service.title === "Executive Coaching" ? { objectPosition: "top" } : {}}
      />
      <h3 className="what-we-do-card-header">{service.title}</h3>
      <p className="what-we-do-card-description">{service.brief}</p>

      {/* Button Container */}
      <div className="button-container">
        {/* Schedule a Call Button */}
        <a href={service.calendly} target="_blank" rel="noopener noreferrer">
          <button className="what-we-do-button">Schedule a Call</button>
        </a>
  
        {/* Redesigned Learn More Button */}
        <button className="what-we-do-learn-more-button" onClick={() => openModal(service)}>
          Learn More <span className="arrow-icon">→</span>
        </button>
      </div>
    </article>
  );
};



const ServiceModal = ({ service, closeModal }) => {
  return (
    <div className="what-we-do-modal-overlay" onClick={closeModal}>
      <div className="what-we-do-modal" onClick={(e) => e.stopPropagation()}>
        <button className="what-we-do-close-button" onClick={closeModal} aria-label="Close Modal">
          ✖
        </button>
        <h2 className="what-we-do-modal-title">{service.title}</h2>
        <p className="what-we-do-modal-content">{service.detailed}</p>
        <div className="what-we-do-modal-actions">
          <a href={service.calendly} target="_blank" rel="noopener noreferrer">
            <button className="what-we-do-button">Schedule a Call</button>
          </a>
          <button className="what-we-do-button secondary" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
