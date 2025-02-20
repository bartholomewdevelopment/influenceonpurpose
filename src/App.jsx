import React from 'react'; // Add this
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

import "./index.css"; // ✅ Corrected import

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
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
