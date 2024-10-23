import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTiktok,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import profile from "/src/assets/profile.jpg"


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button for small screens */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-20 text-white p-2 bg-neutral-800 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`w-full lg:w-1/4 h-full lg:h-screen bg-neutral-800 text-slate-300 p-6 ml-7 mt-7 rounded-lg shadow-lg overflow-y-auto fixed top-0 ${
          isOpen ? "left-0" : "-left-full"
        } lg:left-0 transition-all duration-300 ease-in-out z-10 lg:z-0`}
      >
        <div className="mb-6">
          <img
            src={profile}
            alt="Profile Picture"
            className="w-32 h-32 mx-auto rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-semibold my-4 text-center text-white">
              Anna Kioko
            </h1>
            <p className="text-center bg-neutral-600 p-1 rounded w-full text-white">
              Full Stack Developer
            </p>
          </div>
        </div>
        <hr className="border-zinc-500 my-4" />

        <div className="flex items-center">
          <div>
            <MdEmail className="w-7 h-7 text-white mr-2" />
          </div>
          <div className="my-5">
            <p>EMAIL:</p>
            <a
              href="mailto:annakioko00@gmail.com"
              className="text-gold hover:underline"
            >
              annakioko00@gmail.com
            </a>
          </div>
        </div>

        <div className="flex">
          <div>
            <MdPhone className="w-7 h-7 text-white mr-2" />
          </div>

          <div className="mb-7">
            <p>PHONE:</p>
            <p>(+254) 720 856 222</p>
          </div>
        </div>

        <div className="flex">
          <div>
            <MdLocationOn className="w-7 h-7 text-white mr-2" />
          </div>
          <div className="mb-7">
            <p>LOCATION:</p>
            <p>Nairobi, Kenya</p>
          </div>
        </div>

        <p className="text-center">Let's connect on:</p>
        <div className="flex space-x-8 mt-5 justify-center">
          <a
            href="https://linkedin.com/in/anna-kioko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-8 h-8 text-white hover:text-blue-300" />
          </a>
          <a
            href="http://tiktok.com/@annakioko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="w-8 h-8 text-white hover:text-gold" />
          </a>
          <a
            href="https://github.com/annakioko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-8 h-8 text-white hover:text-gold" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
