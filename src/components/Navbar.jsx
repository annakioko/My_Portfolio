import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-royalblue text-gold">
      <div className="container mx-auto flex justify-between items-center  md:p-8 text-2xl">
        <Link to="/">
          <img src="/src/assets/logo.png" alt="Logo" className="h-10" />
        </Link>
        <div className="flex-1 flex justify-center">
          <div
            className={`flex-col md:flex md:flex-row md:space-x-8 items-center ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <Link
              to="/home"
              className="mx-2 relative hover:text-gray-400 after:block after:absolute after:w-full after:h-0.5 after:bg-current after:left-0 after:bottom-0 after:rounded after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-no-repeat after:bg-contain after:bg-bottom after:bg-[url('/src/assets/squiggly-line.svg')]"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="mx-2 relative hover:text-gray-400 after:block after:absolute after:w-full after:h-0.5 after:bg-current after:left-0 after:bottom-0 after:rounded after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-no-repeat after:bg-contain after:bg-bottom after:bg-[url('/src/assets/squiggly-line.svg')]"
            >
              About
            </Link>
            <Link
              to="/recentprojects"
              className="mx-2 relative hover:text-gray-400 after:block after:absolute after:w-full after:h-0.5 after:bg-current after:left-0 after:bottom-0 after:rounded after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-no-repeat after:bg-contain after:bg-bottom after:bg-[url('/src/assets/squiggly-line.svg')]"
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className="mx-2 relative hover:text-gray-400 after:block after:absolute after:w-full after:h-0.5 after:bg-current after:left-0 after:bottom-0 after:rounded after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-no-repeat after:bg-contain after:bg-bottom after:bg-[url('/src/assets/squiggly-line.svg')]"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="mx-2 relative hover:text-gray-400 after:block after:absolute after:w-full after:h-0.5 after:bg-current after:left-0 after:bottom-0 after:rounded after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-no-repeat after:bg-contain after:bg-bottom after:bg-[url('/src/assets/squiggly-line.svg')]"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-200 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
