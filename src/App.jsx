import React from 'react'; // Add this
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import "./index.css"; 


function App() {
  return (
    <>
      {/* Fixed Header */}
      <Header />

      {/* Main Content Wrapper */}
      <div className="main-content">
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
