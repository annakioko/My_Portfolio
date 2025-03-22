import React from "react";
import { useNavigate } from "react-router-dom";
import CaseStudyTemplate from "../components/CaseStudyTemplate";
import Glamour from "/src/assets/Glamour.png";
import glamour1 from "/src/assets/glamour1.png";
import glamour2 from "/src/assets/glamour2.png";
import glamour3 from "/src/assets/glamour3.png";

const GlamourHeavenCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      {/* Back to Portfolio Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 bg-suede text-blue px-4 py-2 font-semibold font-serif rounded hover:bg-blue-700 transition duration-300"
      >
        ← Back to Portfolio
      </button>

      {/* Case Study Template */}
      <CaseStudyTemplate
        title=""
        description=""
        images={[
          { src: Glamour, alt: "Glamour Heaven Logo" },
          { src: glamour3, alt: "Glamour Heaven Homepage" },
          { src: glamour1, alt: "Glamour Heaven Product Page" },
          { src: glamour2, alt: "Glamour Heaven Checkout Page" },
        ]}
        scope="The project aimed to deliver a highly functional e-commerce platform with a user-friendly interface, secure payment processing, and optimized performance to increase customer engagement and conversions."
        results="60% increase in online sales within the first three months.
           Reduced cart abandonment rates through optimized checkout flows.
           Improved customer retention via personalized user experiences.
          Faster page load times, enhancing user satisfaction and SEO rankings."
        content={[
          <div>
            <h2 className="text-5xl font-bold font-serif text-suede mb-2">
              My Process
            </h2>
            <hr className="h-2 w-36 bg-suede mb-8" />
            <h3 className="text-2xl font-semibold text-suede mb-3">
              01️ UI/UX Design
            </h3>
            <p className="text-lg text-white mb-7">
              Focused on a mobile-first approach to ensure seamless shopping
              across all devices.
            </p>
            <h3 className="text-2xl font-semibold text-suede mb-3">
              02️ Development & Optimization
            </h3>
            <ul className="list-disc list-inside text-lg text-white space-y-2 mb-7">
              <li>
                Integrated secure payment gateways and real-time inventory
                tracking.
              </li>
              <li>
                Implemented SEO best practices to improve search rankings.
              </li>
              <li>Optimized images and assets to boost site speed.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-suede mb-3">
              03️ Testing & Deployment
            </h3>
            <ul className="list-disc list-inside text-lg text-white space-y-2">
              <li>Conducted usability testing to enhance user experience.</li>
              <li>
                Cross-browser compatibility checks and performance improvements.
              </li>
            </ul>
          </div>,
          <div>
            <h2 className="text-5xl font-bold text-suede mb-2 font-serif">Conclusion</h2>
            <hr className="h-2 mb-8 bg-suede w-36" />
            <p className="text-lg text-white mb-2">
              This project highlights my expertise in:
            </p>
            <ul className="list-disc list-inside text-lg text-white space-y-2">
              <li>Building optimized, responsive e-commerce platforms.</li>
              <li>
                Enhancing user experience with secure and seamless navigation.
              </li>
              <li>Improving site performance and search engine visibility.</li>
            </ul>
          </div>,
        ]}
      />
    </div>
  );
};

export default GlamourHeavenCaseStudy;
