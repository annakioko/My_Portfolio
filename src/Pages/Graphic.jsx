import React from "react";
import { useNavigate } from "react-router-dom";
import WebCard from "../components/WebCard"; // Assuming WebCard is in the components folder
import branding from "/src/assets/Branding.jpeg";
import posters from "/src/assets/graphic1.jpeg";

const GraphicDesign = () => {
  const navigate = useNavigate();

  // Project Data
  const projects = [
    {
      image: branding,
      type: "Branding",
      name: "Ckioko Branding",
      path: "/Pages/branding",
    },
    {
      image: posters,
      type: "Marketing Collateral",
      name: " Posters",
      path: "/Pages/opulent",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 bg-brown text-blue px-4 py-2 font-semibold font-serif rounded hover:bg-opacity-80 transition duration-300"
      >
        ← Back to Portfolio
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Graphic Design</h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto">
        Visual storytelling through branding, marketing materials, and creative
        designs that elevate businesses and engage audiences.
      </p>

      {/* Showcase of Projects */}
      <div className="mt-10 grid md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => navigate(project.path)}
            className="cursor-pointer"
          >
            <WebCard
              image={project.image}
              type={project.type}
              name={project.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphicDesign;
