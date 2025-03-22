import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Lazy load pages
const Hero = lazy(() => import("./Pages/Hero"));
const About = lazy(() => import("./Pages/About"));
const WorkSection = lazy(() => import("./Pages/WorkSection"));
const Services = lazy(() => import("./Pages/Services"));
const Contact = lazy(() => import("./Pages/Contact"));
const CkiokoLawCaseStudy = lazy(() => import("./Pages/CkiokoLawCaseStudy"));
const GlamourHeavenCaseStudy = lazy(() =>
  import("./Pages/GlamourHeavenCaseStudy")
);
const HRHubCaseStudy = lazy(() => import("./Pages/HRHubCaseStudy"));
const ZenhubCaseStudy = lazy(() => import("./Pages/ZenhubCaseStudy"));
const LeadingXpertCaseStudy = lazy(() =>
  import("./Pages/LeadingXpertCaseStudy")
);

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="text-center py-20 text-4xl font-serif font-bold">Loading...</div>}>
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
      </Suspense>
    </Router>
  );
}

export default App;
