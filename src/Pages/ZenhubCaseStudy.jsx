import React from "react";
import { useNavigate } from "react-router-dom";
import CaseStudyTemplate from "../components/CaseStudyTemplate";
import zenhub1 from "../assets/zenhub1.png";
import zenhub2 from "../assets/zenhub2.png";
import zenhub3 from "../assets/zenhub3.png";
import zenhub from "../assets/zenhub.png";

const ZenhubCaseStudy = () => {
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
          { src: zenhub, alt: "Zenhub Section " },
          { src: zenhub1, alt: "Zenhub Section 1" },
          { src: zenhub2, alt: "Zenhub Section 2" },
          { src: zenhub3, alt: "Zenhub Full View" },
        ]}
        scope="A high-end spa wanted to promote a limited-time Halloween-themed package to attract more bookings. They needed a landing page that would be visually engaging, mobile-friendly, and conversion-focused."
        results="35% increase in bookings during the promotional period.
Lower bounce rates due to engaging visuals and intuitive design.
Higher conversion rates with strategically placed CTAs.
60% of bookings came from mobile users, highlighting the impact of mobile optimization."
        content={[
          <div key="process">
            <h2 className="text-5xl font-bold font-serif text-suede mb-2">
              Process
            </h2>
            <hr className="h-2 w-36 bg-suede mb-8" />
            <ul className="list-disc list-inside text-lg text-white space-y-2">
              <li>
                Conducted competitor analysis and identified key conversion
                drivers.
              </li>
              <li>
                Designed a wireframe and tested user interactions before
                finalizing the UI.
              </li>
              <li>
                Developed a responsive and SEO-friendly landing page using React
                and Tailwind CSS.
              </li>
            </ul>
          </div>,
        ]}
      />
    </div>
  );
};

export default ZenhubCaseStudy;
