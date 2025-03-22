import React from "react";
import { useNavigate } from "react-router-dom";
import CaseStudyTemplate from "../components/CaseStudyTemplate";
import leading1 from "../assets/leading1.png";
import leading2 from "../assets/leading2.png";
import leading3 from "../assets/leading3.png";
import leading from "../assets/leading.png";




const LeadingXpertCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white relative">
      {/* Back to Portfolio Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 bg-suede text-blue px-4 py-2 font-semibold font-serif rounded hover:bg-blue-700 transition duration-300"
      >
        ← Back to Portfolio
      </button>

      <CaseStudyTemplate
        title=""
        description=""
        images={[
          { src: leading, alt: "LeadingXpert Section 1" },
          { src: leading1, alt: "LeadingXpert Section 2" },
          { src: leading2, alt: "LeadingXpert Section 3" },
          { src: leading3, alt: "LeadingXpert Full View" },
        ]}
        scope="The objective was to design a conversion-optimized landing page that clearly presented LeadingXpert’s consulting services while maintaining a professional and authoritative brand image."
        results="The landing page led to a 50% increase in engagement and significantly boosted client inquiries. The combination of clear messaging, UX optimization, and responsive design helped build trust and drive conversions."
        content={[
          <div key="process">
            <h2 className="text-5xl font-bold font-serif text-suede mb-2">
              Process
            </h2>
            <hr className="h-2 w-36 bg-suede mb-8" />
            <ul className="list-disc list-inside text-lg text-white space-y-2">
              <li>
                Conducted industry research to align the landing page with
                client expectations.
              </li>
              <li>
                Designed a wireframe and performed usability testing to refine
                the user journey.
              </li>
              <li>
                Developed a fully responsive, conversion-focused landing page
                using React and Tailwind CSS.
              </li>
            </ul>
          </div>,
        ]}
      />
    </div>
  );
};

export default LeadingXpertCaseStudy;
