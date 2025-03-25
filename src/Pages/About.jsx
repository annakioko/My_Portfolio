import React from "react";
import Profile1 from "/src/assets/Profile1.jpeg"; // Replace with your actual image path

const AboutMe = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 flex flex-col-reverse md:flex-row items-center">
      {/* Left Side - Image */}
      <div className="relative w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <div className="absolute w-96 h-96 md:w-96 md:h-96 bg-brown transform rotate-6"></div>
        <img
          src={Profile1}
          alt="Anna Kioko"
          className="w-96 h-96 md:w-96 md:h-96 object-cover transform -rotate-3"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          pssst........ here's a more about me!
        </h2>
        <p className="text-lg text-black mb-6">
          I blend web development, digital marketing, and content strategy to
          craft powerful online experiences. Whether it's designing sleek
          websites, optimizing content for search engines, or building engaging
          brand stories, I thrive on turning ideas into reality.
        </p>

        {/* Key Highlights */}
        <div className="bg-blue-100 p-4 md:p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            What I Bring to the Table
          </h3>
          <ul className="text-lg text-black space-y-3">
            <li>💻 Developing intuitive, high-performing websites.</li>
            <li>🚀 Crafting SEO-driven content strategies for visibility.</li>
            <li>🎨 Designing sleek branding and user-friendly interfaces.</li>
            <li>
              📢 Managing social media and digital campaigns that convert.
            </li>
            <li>
              📊 Leveraging analytics to drive data-backed marketing strategies.
            </li>
          </ul>
        </div>

        <p className="text-lg text-black mt-6">
          When I'm not busy creating, you can find me devouring books or binge-watching anime like a
          true enthusiast.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
