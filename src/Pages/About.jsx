import React from "react";
import Profile1 from "/src/assets/Profile1.jpeg"; // Replace with your actual image path

const AboutMe = () => {
  return (
    <section className="bg-white py-20 px-12 flex items-center">
      {/* Left Side - Image */}
      <div className="relative w-1/2 flex justify-center">
        <div className="absolute w-96 h-96 bg-brown  transform rotate-6"></div>
        <img
          src={Profile1}
          alt="Anna Kioko"
          className="w-96 h-96 object-cover  transform -rotate-3"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-1/2 text-left">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Pssst... Here's a Little Bit About Me
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          I'm Anna Kioko a web designer and developer who accidentally fell into
          this world and decided to stay! When I’m not crafting beautiful
          websites, I’m probably trying out a new hobby, enjoying anime a bit
          too much, or drinking way too much coffee.
        </p>

        {/* 3 Truths and a Lie */}
        <div className="bg-blue-100 p-6 ">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Random Facts About Me
          </h3>
          <ul className="text-lg text-gray-800 space-y-3">
            <li>
              📖 If I'm not working, I'm deep in a book. Seriously, send help.
            </li>
            <li>
              🎨 I can design a website but absolutely cannot draw a stick
              figure.
            </li>
            <li>
              ☕ Coffee runs in my veins at this point,hot, iced, all of it.
            </li>
            <li>
              📺 I can (and will) binge-watch an entire anime series in one
              weekend.
            </li>
            <li>
              🛠️ I once built a website in under 24 hours… because why not?
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
