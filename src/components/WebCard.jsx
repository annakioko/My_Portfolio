import React from "react";

const WebCard = ({ image, type, name }) => {
  return (
    <div className=" overflow-hidden  hover:shadow-xl transition duration-300 bg-white">
      {/* Image */}
      <img src={image} alt={name} className="w-full h-96 object-cover" />

      {/* Text Below Image */}
      <div className="p-4 text-center">
        <p className="text-sm text-black uppercase font-semibold">{type}</p>
        <h2 className="text-lg font-bold text-black">{name}</h2>
      </div>
    </div>
  );
};

export default WebCard;
