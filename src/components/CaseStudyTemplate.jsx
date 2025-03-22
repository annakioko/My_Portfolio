import React from "react";

const CaseStudyTemplate = ({ title, description, images, scope, results, content }) => {
  return (
    <section className="py-20 px-6 bg-blue text-white">
      <div className="container mx-auto">
        {/* Hero Image */}
        <div
          className="relative h-[500px] flex flex-col items-center justify-center text-center text-suede px-4"
          style={{
            backgroundImage: `url(${images[0].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0  "></div>
          <h1 className="text-5xl font-bold relative z-10">{title}</h1>
          <p className="text-xl mt-3 relative z-10">{description}</p>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-suede mb-10 text-center">
          {title}
        </h1>

        {/* Scope of Work */}
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-semibold font-serif text-suede mb-2">
            Project Overview
          </h2>
          <hr className="h-2 bg-suede mx-auto w-96 mb-6 text-center" />
          <p className="text-lg text-sans">{scope}</p>
        </div>

        {/* First Content Section + Image */}
        <div className="mb-10 flex flex-col md:flex-row items-center gap-8">
          {images[1] && (
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full md:w-1/2 h-1/2 object-cover "
            />
          )}
          <div className="text-lg text md:w-1/2">{content[0]}</div>
        </div>

        {/* Second Content Section + Image */}
        <div className="mb-10 flex flex-col md:flex-row-reverse items-center gap-8">
          {images[2] && (
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="w-full md:w-1/2 h-1/2 object-cover "
            />
          )}
          <div className="text-lg text md:w-1/2 text-white text-sans">
            {content[1]}
          </div>
        </div>

        {/* Results + Last Image */}
        <div className="mb-10 flex flex-col md:flex-row items-center gap-8">
          {images[3] && (
            <img
              src={images[3].src}
              alt={images[3].alt}
              className="w-full md:w-1/2 h-full object-cover "
            />
          )}
          <div className="text-lg text md:w-1/2">
            <h2 className="text-5xl font-semibold font-serif text-suede mb-2">
              Results
            </h2>
            <hr className="h-2 bg-suede w-36 mb-6" />
            <ul className="text-lg text-white text-sans list-disc pl-5 space-y-2">
              {results.split("\n").map((result, index) => (
                <li key={index}>{result.replace("✅ ", "")}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTemplate;
