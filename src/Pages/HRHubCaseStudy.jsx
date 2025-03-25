import React from "react";
import { useNavigate } from "react-router-dom";
import CaseStudyTemplate from "../components/CaseStudyTemplate";
import HRhub1 from "/src/assets/HRhub1.png";
import HRhub2 from "/src/assets/HRhub2.png";
import HRhub3 from "/src/assets/HRhub3.png";
import HRhub4 from "/src/assets/HRhub4.png";

const HRHubCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white relative">
      {/* Back to Portfolio Button */}
      <button
        onClick={() => navigate("../Pages/web")}
        className="absolute top-6 left-6 bg-suede text-blue px-4 py-2 font-semibold font-serif rounded hover:bg-blue-700 transition duration-300"
      >
        ← Back to Web Projects
      </button>

      {/* Case Study Template */}
      <CaseStudyTemplate
        title=""
        description=""
        images={[
          { src: HRhub2, alt: "HR-Hub Platform Overview" },
          { src: HRhub1, alt: "HR-Hub Dashboard" },
          { src: HRhub2, alt: "HR-Hub Employee Management" },
          { src: HRhub3, alt: "HR-Hub Payroll System" },
        ]}
        scope="The objective was to create an all-in-one HR management system that enhances workflow efficiency, reduces manual workload, and offers an intuitive user experience. The platform needed to support HR professionals with recruitment, employee tracking, payroll automation, and performance analytics."
        results=" 50% increase in HR efficiency by automating repetitive tasks.
          Reduction in manual workload, freeing up HR professionals for strategic initiatives.
          Enhanced user satisfaction** through a seamless and intuitive interface."
        content={[
          <div>
            <h2 className="text-5xl font-bold font-serif text-suede mb-2">
              Goal of the Project
            </h2>
            <hr className="h-2 w-72 bg-suede mb-8" />
            <ul className="list-disc list-inside text-lg text-white space-y-2">
              <li>Develop a scalable and secure HR management platform.</li>
              <li>
                Streamline recruitment, employee management, and payroll
                processes.
              </li>
              <li>Ensure a user-friendly experience for HR professionals.</li>
            </ul>
          </div>,
          <div>
            <h2 className="text-5xl font-bold text-suede font-serif mb-2">
              My Process
            </h2>
            <hr className="h-2 w-36 bg-suede mb-8" />
            <h3 className="text-2xl font-semibold text-suede mb-3">
              01️ Discovery & Research
            </h3>
            <p className="text-lg text-white mb-7">
              Conducted in-depth research to understand HR pain points and
              industry best practices. Collaborated with HR professionals to
              define the core functionalities required.
            </p>
            <h3 className="text-2xl font-semibold text-suede mb-3">
              02 Design & Development
            </h3>
            <ul className="list-disc list-inside text-lg text-white space-y-2 mb-7">
              <li>
                Developed an interactive dashboard for real-time HR insights.
              </li>
              <li>
                Integrated automation for payroll processing and leave
                management.
              </li>
              <li>
                Ensured secure data management and compliance with HR
                regulations.
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-suede mb-3">
              03️ Testing & Deployment
            </h3>
            <ul className="list-disc list-inside text-lg text-white space-y-2">
              <li>Conducted usability testing with HR teams.</li>
              <li>Optimized for performance, security, and accessibility.</li>
              <li>Successfully launched with a smooth onboarding process.</li>
            </ul>
          </div>,
          <div>
            <h2 className="text-3xl font-bold text-white">Conclusion</h2>
            <p className="text-lg text-gray-700">
              This project highlights my expertise in building intuitive,
              high-performance web applications that optimize business
              operations and improve user experiences.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Developing scalable and efficient digital solutions.</li>
              <li>Integrating automation to improve business workflow.</li>
              <li>Ensuring security, compliance, and user-centric design.</li>
            </ul>
          </div>,
        ]}
      />
    </div>
  );
};

export default HRHubCaseStudy;
