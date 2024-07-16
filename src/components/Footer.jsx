import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-slate-200 py-4">
      <div className="container mx-auto text-center">
        <Link to="/about" className="mx-2 hover:text-gray-400">
          About 
        </Link>
        <Link to="/resume" className="mx-2 hover:text-gray-400">
         Portfolio
        </Link>
        <Link to="/blog" className="mx-2 hover:text-gray-400">
          Blog
        </Link>
        <Link to="/contact" className="mx-2 hover:text-gray-400">
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
