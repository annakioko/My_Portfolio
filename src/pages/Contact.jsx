import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="h-screen bg-brown flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-2 text-blue font-serif">Let's Connect!</h1>
      <hr className=" h-1 bg-blue w-48 mb-6" />

      <p className="text-lg mb-4">
        Whether you have a project in mind or just want to say hi, feel free to
        reach out.
      </p>

      <div className="space-y-4 text-lg">
        {/* Phone */}
        <div className="flex items-center space-x-3">
          <FaPhone className="text-blue-500" />
          <span>+254 720 856 222</span>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-black" />
          <a href="mailto:annakioko00@gmail.com" className="hover:underline">
            annakioko00@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-3">
          <FaLinkedin className="text-blue-700" />
          <a
            href="https://www.linkedin.com/in/anna-kioko/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
