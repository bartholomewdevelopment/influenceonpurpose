// App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Book from "./pages/Book";
import WhatWeDo from "./pages/WhatWeDo";
import WhoWeAre from "./pages/WhoWeAre";
import "./index.css";

// Home component (wrapped in a container)
const Home = () => (
  <div className="main-content">
    <Hero />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Section8 />
  </div>
);

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/resources" element={<div>Resources (TBD)</div>} />
          <Route path="/contact" element={<div>Contact Us (TBD)</div>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
