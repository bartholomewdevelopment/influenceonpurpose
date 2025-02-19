import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";

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
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
