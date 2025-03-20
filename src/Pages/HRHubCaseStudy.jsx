import React from "react";

const HRHubCaseStudy = () => {
  return (
    <section className="container mx-auto py-20 px-6">
      <h1 className="text-6xl font-bold text-center mb-10">HR-Hub Platform</h1>
      <hr className="border-2 border-gray-800 w-36 mx-auto mb-10" />

      <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Project Overview</h2>
        <p className="text-lg text-gray-700">
          HR-Hub required a digital platform to simplify HR management
          processes, streamline recruitment, and enhance employee engagement.
          The goal was to build a scalable, secure, and intuitive web
          application.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Process</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>
            Conducted research to identify the core functionalities HR
            professionals need.
          </li>
          <li>
            Developed an interactive dashboard for employee management and
            performance tracking.
          </li>
          <li>
            Integrated automation features for payroll processing and leave
            management.
          </li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Results</h2>
        <p className="text-lg text-gray-700">
          The HR-Hub platform improved HR efficiency by 50%, reduced manual
          workload, and enhanced user satisfaction with an intuitive interface.
        </p>
      </div>
    </section>
  );
};

export default HRHubCaseStudy;
