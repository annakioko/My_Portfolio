import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WorkSection = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <section className="bg-blue py-20 px-6 h-screen flex flex-col items-center justify-center relative">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl text-suede mb-10 font-serif">OUR WORK</h2>
        <hr className="border-suede w-36 mb-7 border-2 mx-auto" />

        {/* Carousel Section */}
        <div className="relative flex justify-center items-center">
          {/* Left Arrow */}
          <button
            className="absolute left-0 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-suede hover:text-white transition"
            onClick={handlePrevious}
          >
            &#8592;
          </button>

          {/* Carousel Images */}
          <div className="flex justify-center items-center space-x-4 w-full">
            {projects.map((project, index) => {
              const isCenter = index === currentIndex;
              const isLeft =
                index ===
                (currentIndex + projects.length - 1) % projects.length;
              const isRight = index === (currentIndex + 1) % projects.length;

              return (
                <div
                  key={project.id}
                  className={`transition-transform transform duration-700 ease-in-out cursor-pointer ${
                    isCenter ? "w-2/4 h-96 z-0" : "w-1/4 h-64 z-0"
                  }`}
                  style={{
                    transform: isCenter ? "scale(1)" : "scale(0.85)",
                    order: isLeft ? 0 : isCenter ? 1 : 2,
                  }}
                  onClick={() => navigate(`/case-study/${project.id}`)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
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
