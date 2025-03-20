import React from "react";

const LeadingXpertCaseStudy = () => {
  return (
    <section className="container mx-auto py-20 px-6">
      <h1 className="text-6xl font-bold text-center mb-10">
        LeadingXpert Landing Page
      </h1>
      <hr className="border-2 border-gray-800 w-36 mx-auto mb-10" />

      <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Project Overview</h2>
        <p className="text-lg text-gray-700">
          LeadingXpert needed a strategic landing page that effectively
          communicated their consulting services and encouraged potential
          clients to take action. The goal was to create a design that balanced
          credibility with a strong call to action.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Process</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Analyzed industry trends to understand customer expectations.</li>
          <li>
            Developed a wireframe and performed usability testing to refine the
            user journey.
          </li>
          <li>
            Built a fully responsive and conversion-focused landing page using
            React and Tailwind CSS.
          </li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Results</h2>
        <p className="text-lg text-gray-700">
          The landing page improved engagement by 50% and led to a noticeable
          increase in client inquiries. Clear messaging and optimized UX design
          helped establish trust and drive conversions.
        </p>
      </div>
    </section>
  );
};

export default LeadingXpertCaseStudy;
