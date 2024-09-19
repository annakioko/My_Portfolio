import React from "react";
import { FaLinkedin, FaGithub, FaTiktok } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-1/4 h-screen bg-zinc-900 text-slate-200 p-6 rounded-lg overflow-y-auto fixed top-0 left-0 my-7 ml-7 border border-solid-bg-white">
      <div className="  mb-6">
        <img
          src="woman-emoji.png"
          alt="Profile Picture"
          className="w-12 h-12 rounded-full mr-4 my-2 items-center"
        />
        <div>
          <p className="text-3xl font-semibold my-4 text-center"> Anna Kioko</p>
          <p className="text-center bg-zinc-500 p-1 rounded ">
            Full Stack Developer
          </p>
        </div>
      </div>
      <hr className="border-zinc-500 my-4" />

      <div className="flex items-center">
        <div>
          <MdEmail className="w-7 h-7 text-white mr-2" />
        </div>
        <div className=" my-5">
          <p>EMAIL:</p>
          <a
            href="annakioko00@gmail.com"
            className="text-blue-400 hover:underline"
          >
            annakioko00@gmail.com
          </a>
        </div>
      </div>

      <div className="flex">
        <div>
          <MdPhone className="w-7 h-7 text-white mr-2" />
        </div>

        <div className=" mb-7">
          <p>PHONE:</p>
          <p>(+254) 720 856 222 </p>
        </div>
      </div>

      <div className="flex">
        <div>
          <MdLocationOn className="w-7 h-7 text-white mr-2" />
        </div>
        <div className=" mb-7">
          <p>LOCATION:</p>
          <p>Nairobi, Kenya </p>
        </div>
      </div>

      <p className="text-center">Let's connect on:</p>
      <div className="flex space-x-8 mt-5 justify-center">
        <a
          href="https://linkedin.com/in/anna-kioko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-8 h-8 text-blue-500 hover:text-blue-300" />
        </a>
        <a
          href="http://tiktok.com/@annakioko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="w-8 h-8 text-white hover:text-gray-600" />
        </a>
        <a
          href="https://github.com/annakioko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-8 h-8 text-white hover:text-gray-600" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
