import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import Profile from "/src/assets/Profile.jpg"; // Replace with your actual image path

const HeroSection = () => {
  return (
    <section className="bg-brown h-screen flex items-center px-12">
      {/* Left Side - Text Content */}
      <div className="w-1/2 text-black">
        <div className="flex items-center text-lg text-blue mb-4">
          <FaMapMarkerAlt className="mr-2" />
          <span>Nairobi, Kenya</span>
        </div>
        <h1 className="text-7xl font-bold mb-3 font-serif">Hi,</h1>
        <h2 className="text-7xl font-bold mb-4 font-serif">I'm Anna Kioko</h2>
        <p className="text-lg mb-6">
          I am a web designer and developer based in Nairobi, Kenya. I started
          out as a social media manager and content creator who somehow stumbled
          into the world of website development—and found that I quite like it
          here.
        </p>

        {/* Links */}
        <div className="flex space-x-6 text-lg font-semibold">
          <a
            href="annakioko00@gmail.com"
            className="text-black hover:underline flex items-center"
          >
            Email <span className="ml-1">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anna-kioko/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:underline flex items-center"
          >
            LinkedIn <span className="ml-1">↗</span>
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 flex justify-end">
        <img
          src={Profile}
          alt="Anna Kioko"
          className="w-96 h-96 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
