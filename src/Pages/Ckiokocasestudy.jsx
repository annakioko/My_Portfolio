import React from "react";
import Ckiokohomepage from "/src/assets/Ckiokohomepage.png";
import CkiokoAboutPage from "/src/assets/CkiokoAboutPage.png";
import CkiokoServicespage from "/src/assets/CkiokoServicespage.png";

const CkiokoCaseStudy = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-900 text-slate-300">
      <h1 className="text-4xl font-bold mb-4 text-white">
        Ckioko Advocates: Crafting Their First Online Presence
      </h1>

      <img
        src={Ckiokohomepage}
        alt="Ckioko Advocates"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <h2 className="text-2xl font-semibold mb-2 text-white">
        Client Overview
      </h2>
      <p className="mb-4">
        Ckioko Advocates is a law firm based in Nairobi, Kenya, specializing in
        conveyancing but offering a full suite of legal services.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-white">
        Project Objective
      </h2>
      <p className="mb-4">
        The goal was to create a responsive, user-friendly platform where
        clients could easily access legal services.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-white">Challenges</h2>
      <ul className="list-disc list-inside mb-4">
        <li>No Existing Digital Presence</li>
        <li>Conveying a Broad Range of Legal Services</li>
        <li>Compliance with Kenyan Legal Marketing Laws</li>
        <li>Maintaining Client Trust</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-white">Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div className="bg-neutral-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg text-gold">
            Custom Web Development
          </h3>
          <p>
            We designed a responsive website using React.js for a fast
            experience.
          </p>
        </div>
        <div className="bg-neutral-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg text-gold">
            Intuitive UI/UX Design
          </h3>
          <p>A clean and simple design ensures easy navigation for visitors.</p>
        </div>
        <div className="bg-neutral-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg text-gold">Interactive Features</h3>
          <p>
            Contact forms and dedicated service pages streamline client
            communication.
          </p>
        </div>
        <div className="bg-neutral-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg text-gold">
            Educational Blog Section
          </h3>
          <p>
            A blog providing informative articles to position the firm as a
            thought leader.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-2 text-white">Results</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Increased Client Engagement</li>
        <li>Enhanced Professional Credibility</li>
        <li>Streamlined Client Interaction</li>
        <li>Positive Client Feedback</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-white">Next Steps</h2>
      <p className="mb-4">
        Ckioko Advocates plans to expand its online presence with more SEO-rich
        content and advanced features.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-neutral-800 p-4 rounded-lg">
            <img
              src={CkiokoAboutPage}
              alt="Conveyancing Service"
              className="w-full h-32 object-cover rounded mb-2"
            />
            <h3 className="font-bold text-lg text-gold">Conveyancing</h3>
            <p>Expert legal services for property transactions.</p>
          </div>
          <div className="bg-neutral-800 p-4 rounded-lg">
            <img
              src={CkiokoServicespage}
              alt="Litigation Service"
              className="w-full h-32 object-cover rounded mb-2"
            />
            <h3 className="font-bold text-lg text-gold">Litigation</h3>
            <p>Strong representation in court for your legal matters.</p>
          </div>
          {/* Add more service cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default CkiokoCaseStudy;
