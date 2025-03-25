import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Lazy load pages
const Hero = lazy(() => import("./pages_temp/Hero"));
const About = lazy(() => import("./pages_temp/About"));
const WorkSection = lazy(() => import("./pages_temp/WorkSection"));
const Services = lazy(() => import("./pages_temp/Services"));
const Contact = lazy(() => import("./pages_temp/Contact"));
const CkiokoLawCaseStudy = lazy(() => import("./pages_temp/CkiokoLawCaseStudy"));
const GlamourHeavenCaseStudy = lazy(() =>
  import("./pages_temp/GlamourHeavenCaseStudy")
);
const HRHubCaseStudy = lazy(() => import("./pages_temp/HRHubCaseStudy"));
const ZenhubCaseStudy = lazy(() => import("./pages_temp/ZenhubCaseStudy"));
const LeadingXpertCaseStudy = lazy(() =>
  import("./pages_temp/LeadingXpertCaseStudy")
);

// New Pages
const Graphic = lazy(() => import("./pages_temp/Graphic"));
const Web = lazy(() => import("./pages_temp/Web"));
const Content = lazy(() => import("./pages_temp/Content"));

// Case Studies for Graphic Design
const Opulent = lazy(() =>
  import("./pages_temp/Opulent")
);
const Branding = lazy(() =>
  import("./pages_temp/Branding")
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
          <Route path="/content" element={<Content />} />

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
