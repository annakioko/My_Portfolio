import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import contactPageBg from "../assets/Contactpagebg.jpg";
import contactPageImage from "../assets/contact.jpg";

const Contact = () => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${contactPageBg})`,
        backgroundColor: "rgba(255, 255, 255, 0.45)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between space-x-6 w-4/5 md:w-3/4 lg:w-2/3 p-8">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={contactPageImage}
            alt="Contact"
            className="max-w-full h-auto rounded"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-7xl font-bold text-black mb-4">Contact</h1>
          <p className="text-lg text-gray-900 mb-4">Phone: 0720856222</p>
          <p className="text-lg text-gray-900 mb-4">
            Email: annakioko00@gmail.com
          </p>
          <p className="text-lg text-gray-900 mb-6">Social media:</p>
          <div className="flex justify-center md:justify-start mt-6">
            <a
              href="https://www.linkedin.com/in/annakioko"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-blue-600 hover:text-blue-700"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://www.instagram.com/annakioko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700"
            >
              <FaInstagram size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
