import React, { useState } from "react";
import Modal from "react-modal";
import { FaLinkedin, FaMedium, FaInstagram, FaFacebook } from "react-icons/fa";
import ANKBG from "/src/assets/ANKBG.jpg";

Modal.setAppElement("#root"); // Ensures accessibility

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue text-suede sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-7 px-6 ">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide font-serif">
          A.N.K DIGITAL
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 text-lg font-serif">
          <a href="#hello" className="hover:underline">
            Hello!
          </a>
          <a href="#about" className="hover:underline">
            About Me
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#portfolio" className="hover:underline">
            Portfolio
          </a>
          <a href="#testimonials" className="hover:underline">
            Testimonials
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-black"
          >
            {/* Hamburger Icon */}
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal for Mobile Menu */}
      <Modal
        isOpen={isMenuOpen}
        onRequestClose={toggleMenu}
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {/* Menu Content */}
        <div className="w-full h-full relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${ANKBG})`,
              backgroundSize: "cover",
              filter: "blur(4px)",
            }}
          ></div>

          {/* Menu Links */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-2 bg-white text-black bg-opacity-80">
            <h1 className="text-gold font-bold bg-blue px-24 py-3">MENU</h1>{" "}
            {/* Optional: semi-transparent background */}
            <a href="#hello" className="py-2 hover:underline">
              Hello!
            </a>
            <a href="#about" className="py-2 hover:underline">
              About Me
            </a>
            <a href="#skills" className="py-2 hover:underline">
              Skills
            </a>
            <a href="#portfolio" className="py-2 hover:underline">
              Portfolio
            </a>
            <a href="#testimonials" className="py-2 hover:underline">
              Testimonials
            </a>
            <a href="#contact" className="py-2 hover:underline">
              Contact
            </a>
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-black w-9 h-9 opacity-90 hover:bg-blue" />
              </a>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMedium className="text-black w-9 h-9 opacity-90" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-black w-9 h-9 opacity-90 hover:bg-red-400" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-black w-9 h-9 opacity-90 hover:bg-cyan-600" />
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
