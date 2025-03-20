import React from "react";

const CkiokoLawCaseStudy = () => {
  return (
    <section className="container mx-auto py-20 px-6">
      <h1 className="text-6xl font-bold text-center mb-10">
        Ckioko Law Firm Website
      </h1>
      <hr className="border-2 border-gray-800 w-36 mx-auto mb-10" />

      <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Project Overview</h2>
        <p className="text-lg text-gray-700">
          Ckioko Law Firm required a professional and accessible website to
          showcase their legal services while maintaining compliance with legal
          advertising regulations. The site needed to be informative, engaging,
          and easy to navigate for potential clients.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Process</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>
            Conducted in-depth research on legal website best practices and
            compliance guidelines.
          </li>
          <li>
            Created a structured content strategy that highlighted key practice
            areas.
          </li>
          <li>
            Developed a responsive, SEO-friendly, and accessible website using
            React and WordPress.
          </li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Results</h2>
        <p className="text-lg text-gray-700">
          The website improved client engagement, enhanced credibility, and
          streamlined inquiries. With optimized performance and accessibility,
          the site provided a seamless user experience for clients seeking legal
          assistance.
        </p>
      </div>
    </section>
  );
};

export default CkiokoLawCaseStudy;
