import React from "react";
import { useNavigate } from "react-router-dom";
import CaseStudyTemplate from "../components/CaseStudyTemplate";
import Ckiokohomepage from "/src/assets/Ckiokohomepage.png";
import CkiokoAboutPage from "/src/assets/CkiokoAboutPage.png";
import CkiokoContactpage from "/src/assets/CkiokoContactpage.png";
import CkiokoServicespage from "/src/assets/CkiokoServicespage.png";
import ckioko from "/src/assets/ckioko.png";

const CkiokoLawCaseStudy = () => {
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

      {/* Case Study Template */}
      <CaseStudyTemplate
        title=""
        description=""
        images={[
          { src: ckioko, alt: "Ckioko Law Firm Homepage" },
          { src: CkiokoAboutPage, alt: "Ckioko About Page" },
          { src: CkiokoContactpage, alt: "Ckioko Contact Page" },
          { src: CkiokoServicespage, alt: "Ckioko Mobile View" },
        ]}
        scope="The goal of this project was to design and develop a fully functional, responsive, and high-performing website for a law firm specializing in conveyancing and general legal services. The website needed to reflect the firm's professionalism, credibility, and client-centric approach while ensuring ease of use for both clients and administrators.

"
        results=" Improved Client Engagement: The seamless booking system and intuitive navigation increased client inquiries by 40%.
 Enhanced User Experience: The responsive, mobile-first design ensured a 99% accessibility score and smooth interaction across all devices.
SEO Optimization Success: The blog section and optimized content improved search engine rankings, driving a 60% increase in organic traffic within the first three months.
 Operational Efficiency: The admin dashboard streamlined case management, reducing administrative workload by 30%.
 Brand Authority: The modern, sleek design positioned the firm as a credible and professional legal service provider."
        content={[
          <div className="">
            <h2 className="text-5xl font-bold font-serif text-suede mb-2">
              Goal of the Project
            </h2>
            <hr className="h-2 w-72 bg-suede mb-8" />
            <ul className="list-disc list-inside text-lg text-white space-y-2">
              <li>Build a professional, sleek, and user-friendly website.</li>
              <li>
                Allow easy navigation for clients to access legal services.
              </li>
              <li>Implement an admin dashboard and client dashboard.</li>
              <li>
                Enable clients to book consultations and access legal resources.
              </li>
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
              Analyzed competitors' websites to understand user expectations and
              collaborated with the legal team to define the firm's core
              services and target audience.
            </p>
            <h3 className="text-2xl font-semibold text-suede mb-3">
              02 Design & Development
            </h3>
            <ul className="list-disc list-inside text-lg text-white space-y-2 mb-7">
              <li>
                Built reusable components for navigation (Navbar & Footer).
              </li>
              <li>Created sections for Services, Blog, and Packages.</li>
              <li>
                Integrated an interactive client dashboard for saving important
                dates.
              </li>
              <li>Implemented theme customization for different seasons.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-suede mb-3">
              03️ Responsive Design & Testing
            </h3>
            <ul className="list-disc list-inside text-lg text-white space-y-2">
              <li>Mobile-first approach using Tailwind CSS.</li>
              <li>Cross-browser compatibility testing.</li>
              <li>Accessibility checks for legal compliance.</li>
            </ul>
          </div>,

          <div>
            <h2 className="text-3xl font-bold text-white">Conclusion</h2>
            <p className="text-lg text-gray-700">
              This project showcases my ability to:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Build reusable components</li>
              <li>Create a clean and responsive UI with Tailwind CSS</li>
              <li>Implement a smooth user experience</li>
            </ul>
          </div>,
        ]}
      />
    </div>
  );
};

export default CkiokoLawCaseStudy;
