import React, { useState } from "react";

const ContentCard = ({ title, image, description, publication, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Image Card */}
      <div
        className="relative cursor-pointer bg-white  overflow-hidden transition-transform transform hover:scale-105"
        onClick={() => setIsOpen(true)}
      >
        <img src={image} alt={title} className="w-full h-96 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-brown p-6  max-w-lg w-full relative">
            <button
              className="absolute top-3 right-3 text-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-black">{description}</p>
            <p className=" text-black text-xl mt-5 font-mono">
              Published on: <span className="font-semibold ">{publication}</span>
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-white text-blue text-center py-2 rounded-lg hover:bg-blue hover:text-white transition"
            >
              Read It Now
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ContentCard;
