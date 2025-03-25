import React from "react";
import { useNavigate } from "react-router-dom";
import WebCard from "../components/WebCard";
import HrHub from "/src/assets/HrHub.png";
import ckioko from "/src/assets/ckioko.png";
import leading from "/src/assets/leading.png";
import Glamour from "/src/assets/Glamour.png";
import Zenhub from "/src/assets/zenhub.png";

export default function Web() {
  const navigate = useNavigate();

  const projects = [
    {
      image: ckioko,
      type: "Website",
      name: "Ckioko Law",
      path: "/ckiokolawcasestudy",
    },
    {
      image: Glamour,
      type: "E-commerce",
      name: "Glamour Heaven",
      path: "/glamourheavencasestudy",
    },
    {
      image: HrHub,
      type: "Web App",
      name: "HR Hub",
      path: "/hrhubcasestudy",
    },
    {
      image: leading,
      type: "Consulting",
      name: "Leading Xpert",
      path: "/leadingxpertcasestudy",
    },
    {
      image: Zenhub,
      type: "Business Solutions",
      name: "ZenHub",
      path: "/zenhubcasestudy",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 ">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 bg-brown text-blue px-4 py-2 font-semibold font-serif rounded hover:bg-blue-700 transition duration-300"
      >
        ← Back to Portfolio
      </button>
      <h1 className="text-3xl font-bold text-center mb-6">Web Projects</h1>
      <p>
        Explore a collection of innovative web projects designed for impact,
        functionality, and user experience. Each project highlights a unique
        approach to solving real-world challenges through seamless design and
        development. Click on any project to dive into its case study!
      </p>

      <div className="grid md:grid-cols-2 gap-16 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => navigate(project.path)}
            className="cursor-pointer"
          >
            <WebCard
              image={project.image}
              type={project.type}
              name={project.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
