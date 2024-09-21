import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-neutral-600 rounded-lg p-4 mx-auto absolute top-0 right-0 flex justify-between mb-7 z-10">
      {/* Hamburger Icon for small screens */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-slate-100 focus:outline-none"
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Full Menu for larger screens */}
      <ul
        className={`hidden lg:flex space-x-8 transition-all duration-300 ease-in-out`}
      >
        <li>
          <Link to="/about" className="text-slate-100 hover:text-gold">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-slate-100 hover:text-gold">
            Services
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-slate-100 hover:text-gold">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/blog" className="text-slate-100 hover:text-gold">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-slate-100 hover:text-gold">
            Contact
          </Link>
        </li>
      </ul>

      {/* Dropdown Menu for smaller screens */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col space-y-4 mt-4 bg-neutral-600 p-4 rounded-lg absolute top-full right-0 w-48">
          <li>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="text-slate-100 hover:text-gold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={toggleMenu}
              className="text-slate-100 hover:text-gold"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={toggleMenu}
              className="text-slate-100 hover:text-gold"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={toggleMenu}
              className="text-slate-100 hover:text-gold"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="text-slate-100 hover:text-gold"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
