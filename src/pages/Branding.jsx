import React from "react";
import { useNavigate } from "react-router-dom";
import BusinessCard from "/src/assets/Businesscard.pdf";
import Letterhead from "/src/assets/Letterhead.png";

const Branding = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/graphic")}
        className="absolute top-6 left-6 bg-brown text-blue px-4 py-2 font-semibold rounded hover:bg-opacity-80 transition duration-300"
      >
        ← Back to Graphic Design
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Law Firm Branding</h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto">
        A cohesive brand identity designed for a professional law firm, ensuring
        trust, credibility, and modern aesthetics.
      </p>

      {/* Goals Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-2">Goals</h2>
        <p className="text-gray-700">
          The goal was to create a professional and authoritative brand identity
          that reflects the firm's credibility while maintaining a modern and
          polished look.
        </p>
      </div>

      {/* Solutions Section */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Solutions</h2>
        <p className="text-gray-700">
          The branding package includes a sleek business card and an elegant
          letterhead that align with the firm's visual identity. The design
          incorporates a refined color palette, professional typography, and a
          structured layout to enhance the brand’s image.
        </p>
      </div>

      {/* Business Card PDF */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Business Card</h2>
        <embed
          src={BusinessCard}
          type="application/pdf"
          width="100%"
          height="500px"
          className="rounded shadow-lg"
        />
      </div>

      {/* Letterhead PDF */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Letterhead</h2>
        <img
          src={Letterhead}
          alt="Letterhead"
          className=""
        />
      </div>
    </div>
  );
};

export default Branding;
