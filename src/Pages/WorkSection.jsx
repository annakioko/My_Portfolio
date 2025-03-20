import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import HrHub from "/src/assets/HrHub.png";
import ckioko from "/src/assets/ckioko.png";
import LeadingXpert from "/src/assets/LeadingXpert.png";
import Glamour from "/src/assets/Glamour.png";
import Zenhub from "/src/assets/Zenhub.png";

const projects = [
  { id: "1", title: "Zehhub Landing Page", image: Zenhub },
  { id: "2", title: "LeadingXpert Landing Page", image: LeadingXpert },
  { id: "3", title: "Ckioko Law Firm Website", image: ckioko },
  { id: "4", title: "Glamour Heaven E-Commerce", image: Glamour },
  { id: "5", title: "HR-Hub Platform", image: HrHub },
];

const WorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const openModal = (project) => {
    setActiveProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveProject(null);
  };

  const getVisibleProjects = () => {
    let visibleProjects = [];
    for (let i = 0; i < 3; i++) {
      visibleProjects.push(projects[(currentIndex + i) % projects.length]);
    }
    return visibleProjects;
  };

  return (
    <section className="bg-blue py-20 px-6  h-screen flex flex-col items-center justify-center relative">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl text-suede mb-10 font-serif">OUR WORK</h2>
        <hr className="border-suede w-36 mb-7 border-2 mx-auto" />

        {/* Carousel Section */}
        <div className="relative flex justify-center items-center w-full ">
          {/* Left Arrow */}
          <button
            className="absolute left-0 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-suede hover:text-white transition"
            onClick={handlePrevious}
          >
            &#8592;
          </button>

          {/* Carousel Images */}
          <div className="flex justify-center items-center space-x-4 w-full overflow-hidden">
            {getVisibleProjects().map((project, index) => (
              <div
                key={project.id}
                className={`transition-transform transform duration-700 ease-in-out cursor-pointer ${
                  index === 1 ? "w-2/3 h-96" : "w-1/3 h-64"
                }`}
                style={{ transform: index === 1 ? "scale(1)" : "scale(0.85)" }}
                onClick={() => openModal(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-suede hover:text-white transition"
            onClick={handleNext}
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
