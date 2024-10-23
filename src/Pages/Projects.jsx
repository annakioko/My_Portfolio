import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import ckiokohome from "/src/assets/ckiokohome.png";
import HrHub from "/src/assets/Hr.hub.png";
import Glamourheaven from "/src/assets/Glamourheaven.png";


// Sample project data
const projects = [
  {
    title: "Glamourheaven",
    description: "An online store built with React and Node.js.",
    category: "E-commerce",
    imageUrl: Glamourheaven,
    caseStudyLink: "/projects/ecommerce-website",
  },
  {
    title: "Hr-Hub",
    description:
      " A centralized hub for all employee data and operations, streamlining management processes and enhancing accuracy.",
    category: "App Development",
    imageUrl: HrHub,
    caseStudyLink: "/projects/travel-app",
  },
  {
    title: "Personal Blog",
    description: "A WordPress-powered blog site.",
    category: "WordPress",
    imageUrl: "/path/to/blog-image.jpg",
    caseStudyLink: "/projects/personal-blog",
  },
  {
    title: "Ckioko Advocates",
    description: "A modern and responsive website designed for a law firm.",
    category: "Web Development",
    imageUrl: ckiokohome,
    caseStudyLink: "https://ckiokolawfirm.com",
  },
  // Add more projects here
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="portfolio-container">
      <h1 className="text-4xl text-white font-bold mb-4">Projects</h1>

      {/* Category Filter Buttons */}
      <div className="filter-buttons flex justify-center space-x-4 mb-8">
        {[
          "All",
          "App Development",
          "Web Development",
          "E-commerce",
          "WordPress",
        ].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? " text-gold"
                : " text-white hover:text-gold"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-transparent hover:scale transition-shadow cursor-pointer overflow-hidden"
          >
            {/* Clickable image leading to the case study page */}
            <Link to={project.caseStudyLink}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded"
              />
            </Link>

            {/* Project Title and Description outside of the image card */}
            <div className="mt-4">
              <h2 className="text-xl  mb-2 text-white">
                {project.title}
              </h2>
              <p className="text-slate-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
