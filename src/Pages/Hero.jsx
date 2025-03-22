import React from "react";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import Profile from "/src/assets/Profile.jpg";

const HeroSection = () => {
  return (
    <section className="bg-brown min-h-screen flex flex-col md:flex-row items-center px-6 md:px-12 py-12">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-black text-center md:text-left mb-8 md:mb-0">
        <div className="flex justify-center md:justify-start items-center text-lg text-blue mb-4">
          <FaMapMarkerAlt className="mr-2" />
          <span>Nairobi, Kenya</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-3 font-serif">Hi,</h1>
        <h2 className="text-5xl md:text-7xl font-bold mb-4 font-serif">
          I'm Anna Kioko
        </h2>
        <p className="text-lg mb-6 px-4 md:px-0">
          I am a web designer and developer based in Nairobi, Kenya. I started
          out as a social media manager and content creator who somehow stumbled
          into the world of website development, and... found that I quite like
          it here.
        </p>

        {/* Links */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-lg font-semibold items-center sm:items-start">
          <a
            href="mailto:annakioko00@gmail.com"
            className="text-black hover:underline flex items-center"
          >
            Email <FaExternalLinkAlt className="ml-1 w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/anna-kioko/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline flex items-center"
          >
            LinkedIn <FaExternalLinkAlt className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src={Profile}
          alt="Anna Kioko"
          className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
