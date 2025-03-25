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

// New Pages
const Graphic = lazy(() => import("./Pages/Graphic"));
const Web = lazy(() => import("./Pages/Web"));
const Content = lazy(() => import("./Pages/Content"));

// Case Studies for Graphic Design
const Opulent = lazy(() =>
  import("./Pages/Opulent")
);
const Branding = lazy(() =>
  import("./Pages/Branding")
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

          {/* New Routes */}
          <Route path="/Pages/graphic" element={<Graphic />} />
          <Route path="/Pages/web" element={<Web />} />
          <Route path="/Pages/content" element={<Content />} />

          {/* Graphic Design Case Studies */}
          <Route
            path="/Pages/opulent"
            element={<Opulent />}
          />
          <Route
            path="/Pages/branding"
            element={<Branding />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
