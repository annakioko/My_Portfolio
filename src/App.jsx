import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WorkSection from "./Pages/WorkSection";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import CkiokoLawCaseStudy from "./Pages/CkiokoLawCaseStudy";
import GlamourHeavenCaseStudy from "./Pages/GlamourHeavenCaseStudy";
import HRHubCaseStudy from "./Pages/HRHubCaseStudy";
import ZenhubCaseStudy from "./Pages/ZenhubCaseStudy";
import LeadingXpertCaseStudy from "./Pages/LeadingXpertCaseStudy";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Portfolio Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <WorkSection />
              <Services />
              <Contact />
            </>
          }
        />

        {/* Case Study Pages (Standalone) */}
        <Route
          path="/Pages/ckiokolawcasestudy"
          element={<CkiokoLawCaseStudy />}
        />
        <Route
          path="/Pages/glamourheavencasestudy"
          element={<GlamourHeavenCaseStudy />}
        />
        <Route path="/Pages/hrhubcasestudy" element={<HRHubCaseStudy />} />
        <Route
          path="/Pages/leadingxpertcasestudy"
          element={<LeadingXpertCaseStudy />}
        />
        <Route path="/Pages/zenhubcasestudy" element={<ZenhubCaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
