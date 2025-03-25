import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Lazy load pages
const Hero = lazy(() => import("./pages/Hero"));
const About = lazy(() => import("./pages/About"));
const WorkSection = lazy(() => import("./pages/WorkSection"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const CkiokoLawCaseStudy = lazy(() => import("./pages/CkiokoLawCaseStudy"));
const GlamourHeavenCaseStudy = lazy(() =>
  import("./pages/GlamourHeavenCaseStudy")
);
const HRHubCaseStudy = lazy(() => import("./pages/HRHubCaseStudy"));
const ZenhubCaseStudy = lazy(() => import("./pages/ZenhubCaseStudy"));
const LeadingXpertCaseStudy = lazy(() =>
  import("./pages/LeadingXpertCaseStudy")
);

// New Pages
const Graphic = lazy(() => import("./pages/Graphic"));
const Web = lazy(() => import("./pages/Web"));
const Content = lazy(() => import("./pages/Content"));

// Case Studies for Graphic Design
const Opulent = lazy(() =>
  import("./pages/Opulent")
);
const Branding = lazy(() =>
  import("./pages/Branding")
);

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="text-center py-20 text-4xl font-serif font-bold">
            Loading...
          </div>
        }
      >
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

          {/* Case Study Pages */}
          <Route
            path="/ckiokolawcasestudy"
            element={<CkiokoLawCaseStudy />}
          />
          <Route
            path="/glamourheavencasestudy"
            element={<GlamourHeavenCaseStudy />}
          />
          <Route path="/hrhubcasestudy" element={<HRHubCaseStudy />} />
          <Route
            path="/leadingxpertcasestudy"
            element={<LeadingXpertCaseStudy />}
          />
          <Route path="/zenhubcasestudy" element={<ZenhubCaseStudy />} />

          {/* New Routes */}
          <Route path="/graphic" element={<Graphic />} />
          <Route path="/web" element={<Web />} />
          <Route path="//content" element={<Content />} />

          {/* Graphic Design Case Studies */}
          <Route
            path="/opulent"
            element={<Opulent />}
          />
          <Route
            path="/branding"
            element={<Branding />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
