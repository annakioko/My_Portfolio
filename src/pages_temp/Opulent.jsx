import React from "react";
import { useNavigate } from "react-router-dom";
import Poster3 from "/src/assets/Poster3.png";
import Poster2 from "/src/assets/Poster2.png";
import Poster from "/src/assets/Poster.png";

const OpulentHomesCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/graphic")}
        className="absolute top-6 left-6 bg-brown text-blue px-4 py-2 font-semibold font-serif rounded hover:bg-blue-700 transition duration-300"
      >
        ← Back to Graphic design
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Opulent Homes</h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto">
        Elevating real estate visibility through branding, marketing collateral,
        and engaging social media content.
      </p>

      {/* Goals Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold"> Goals</h2>
        <ul className="list-disc ml-6 text-gray-700 mt-2">
          
          <li>Attract high-value clients through strategic branding.</li>
          <li>Increase engagement via compelling real estate posters.</li>
        </ul>
      </div>

      {/* Solutions Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold"> Solutions</h2>
        <ul className="list-disc ml-6 text-gray-700 mt-2">
         
          <li>Designed visually striking posters for both digital & print.</li>
          
        </ul>
      </div>

      {/* Posters Showcase */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <img src={Poster3} alt="Poster 3" className="" />
        <img src={Poster2} alt="Poster 2" className="" />
        <img src={Poster3} alt="Poster " className="" />
      </div>
    </div>
  );
};

export default OpulentHomesCaseStudy;
