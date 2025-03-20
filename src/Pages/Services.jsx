import React from "react";
import portfolio1 from "/src/assets/portfolio1.png";
import portfolio2 from "/src/assets/portfolio2.webp";

const services = [
  {
    title1: "01. Web Design & Development",
    description1:
      "I create modern, responsive, and user-friendly websites that help businesses stand out and convert visitors into customers.",
    title2: "02. Website Management & Support",
    description2:
      "I ensure your website stays updated, secure, and optimized. Regular maintenance, backups, and content updates keep your business running smoothly.",
    image: portfolio2, // Using the imported image directly
    reverse: false,
  },
  {
    title1: "03. Email Marketing & Automation",
    description1:
      "I set up automated email sequences and targeted campaigns to help businesses nurture leads and increase conversions.",
    title2: "04. Graphic Design",
    description2:
      "I create eye-catching graphics for websites, ads, and social media to help brands stand out.",
    image: portfolio1, // Using the second imported image
    reverse: true,
  },
];

const Services = () => {
  return (
    <section className="bg-white text-black py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-3">What I Can Do for You...</h2>
                <hr className="border-black border-1 w-60 mb-12  text-center ml-96" />

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                service.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title1}
                className="w-full md:w-1/2 "
              />

              {/* Text Content */}
              <div className="md:w-1/2 md:ml-8 p-6 text-left">
                <h3 className="text-3xl font-bold font-serif mb-2">
                  {service.title1}
                </h3>
                <hr className="bg-brown h-2 w-1/2 mb-3 border-none" />
                <p className="text-lg mb-6">{service.description1}</p>

                <h3 className="text-3xl font-bold font-serif mb-2">
                  {service.title2}
                </h3>
                <hr className="bg-brown h-2 w-1/2 mb-3 border-none" />
                <p className="text-lg">{service.description2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
