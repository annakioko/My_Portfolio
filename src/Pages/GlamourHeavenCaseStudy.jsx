import React from "react";

const GlamourHeavenCaseStudy = () => {
  return (
    <section className="container mx-auto py-20 px-6">
      <h1 className="text-6xl font-bold text-center mb-10">
        Glamour Heaven E-commerce
      </h1>
      <hr className="border-2 border-gray-800 w-36 mx-auto mb-10" />

      <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Project Overview</h2>
        <p className="text-lg text-gray-700">
          Glamour Heaven needed a robust and user-friendly e-commerce platform
          to streamline online sales and enhance the customer shopping
          experience. The goal was to create a visually appealing, fast, and
          secure website that supports seamless transactions.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Process</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>
            Designed and implemented a mobile-first UI/UX for smooth navigation.
          </li>
          <li>
            Integrated secure payment gateways and real-time inventory
            management.
          </li>
          <li>
            Optimized the website for fast loading speeds and SEO best
            practices.
          </li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Results</h2>
        <p className="text-lg text-gray-700">
          The platform led to a 60% increase in online sales, reduced cart
          abandonment rates, and improved customer retention through
          personalized user experiences.
        </p>
      </div>
    </section>
  );
};

export default GlamourHeavenCaseStudy;
