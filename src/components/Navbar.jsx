import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-blue text-suede font-serif sticky top-0 z-50 py-5 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Empty div for spacing (pushes name to the center) */}
        <div className="w-1/3"></div>

        {/* Name in the center */}
        <div className="text-2xl md:text-3xl font-bold font-serif text-center">
          Anna Kioko
        </div>

        {/* Social Links on the right */}
        <div className="w-1/3 flex justify-end space-x-6">
          <a
            href="https://www.linkedin.com/in/anna-kioko/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition duration-300"
          >
            <FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />
          </a>
          <a
            href="mailto:annakioko00@gmail.com"
            className="hover:text-gray-200 transition duration-300"
          >
            <FaEnvelope className="w-6 h-6 md:w-7 md:h-7" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
