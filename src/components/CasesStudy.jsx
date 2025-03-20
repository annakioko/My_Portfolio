// src/components/CaseStudyTemplate.jsx
import React from "react";

const CaseStudyTemplate = ({ title, image, scope, results, content }) => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-suede mb-5">{title}</h1>
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-cover mb-6 rounded-lg shadow-lg"
        />

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-suede">Scope of Work</h2>
          <p className="text-lg text-gray-700">{scope}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-suede">Results</h2>
          <p className="text-lg text-gray-700">{results}</p>
        </div>

        <div className="text-lg text-gray-700">{content}</div>
      </div>
    </section>
  );
};

export default CaseStudyTemplate;
