import React, { useState, useEffect } from "react";
import HrHub from "/src/assets/HrHub.png";
import ckioko from "/src/assets/ckioko.png";
import leading from "/src/assets/leading.png";
import Glamour from "/src/assets/Glamour.png";
import zenhub from "/src/assets/zenhub.png";

const projects = [
  {
    id: "1",
    title: "Zenhub Landing Page",
    image: zenhub,
    link: "/Pages/zenhubcasestudy",
  },
  {
    id: "2",
    title: "LeadingXpert Landing Page",
    image: leading,
    link: "/Pages/leadingxpertcasestudy",
  },
  {
    id: "3",
    title: "Ckioko Law Firm Website",
    image: ckioko,
    link: "/Pages/ckiokolawcasestudy",
  },
  {
    id: "4",
    title: "Glamour Heaven E-Commerce",
    image: Glamour,
    link: "/Pages/glamourheavencasestudy",
  },
  {
    id: "5",
    title: "HR-Hub Platform",
    image: HrHub,
    link: "/Pages/hrhubcasestudy",
  },
];

const WorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <section className="bg-blue py-16 px-4 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-suede mb-5 font-serif">
          My WORK
        </h2>
        <hr className="border-suede w-24 sm:w-32 md:w-36 mb-10 border-2 mx-auto" />

        {/* Carousel Section */}
        <div className="relative flex justify-center items-center w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl ">
          {/* Left Arrow */}
          <button
            className="absolute left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full lg:p-4  hover:bg-suede hover:text-white transition"
            onClick={handlePrevious}
          >
            &#8592;
          </button>

          {/* Single Project Display */}
          <a
            href={projects[currentIndex].link}
            className="transition-transform duration-700 ease-in-out w-full flex flex-col items-center"
          >
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="w-auto max-w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl object-cover "
            />
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mt-4">
              {projects[currentIndex].title}
            </h3>
          </a>

          {/* Right Arrow */}
          <button
            className="absolute right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 lg:p-4 rounded-full shadow-lg hover:bg-suede hover:text-white transition"
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
