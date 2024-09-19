import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-neutral-600 rounded-lg p-4 mx-auto absolute top-0 right-0 flex justify-between mb-7 ">
      <ul className="flex space-x-8">
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
    </nav>
  );
};

export default Navbar;
