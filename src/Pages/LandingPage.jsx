import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/src/assets/coding.jpg)" }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1
          className="glitch relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
          data-text="Not your average software engineer"
        >
          Not your average software engineer
        </h1>
        <p className="mt-4 text-xl">
          Get ready to turn your ideas into reality
        </p>
        <Link to="/home">
          <button className="mt-8 p-4  rounded-full text-white text-2xl hover:bg-slate-300">
            ⬇️
          </button>
        </Link>
      </div>
      <style>
        {`
          .glitch {
            position: relative;
            color: white;
            font-size: 5rem;
            animation: glitch 1s infinite;
          }

          .glitch::before, .glitch::after {
            content: attr(data-text);
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            background: inherit;
          }

          .glitch::before {
            left: 2px;
            text-shadow: -2px 0 red;
            clip: rect(24px, 550px, 90px, 0);
            animation: glitch 1s infinite;
          }

          .glitch::after {
            left: -2px;
            text-shadow: -2px 0 blue;
            clip: rect(85px, 550px, 140px, 0);
            animation: glitch 1.5s infinite;
          }

          @keyframes glitch {
            0% {
              clip: rect(24px, 550px, 90px, 0);
            }
            10% {
              clip: rect(85px, 550px, 140px, 0);
            }
            20% {
              clip: rect(24px, 550px, 90px, 0);
            }
            30% {
              clip: rect(85px, 550px, 140px, 0);
            }
            40% {
              clip: rect(24px, 550px, 90px, 0);
            }
            50% {
              clip: rect(85px, 550px, 140px, 0);
            }
            60% {
              clip: rect(24px, 550px, 90px, 0);
            }
            70% {
              clip: rect(85px, 550px, 140px, 0);
            }
            80% {
              clip: rect(24px, 550px, 90px, 0);
            }
            90% {
              clip: rect(85px, 550px, 140px, 0);
            }
            100% {
              clip: rect(24px, 550px, 90px, 0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
