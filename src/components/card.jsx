
import React from 'react';

const Card = ({ image, name, description, onButtonClick }) => {
  return (
    <div className="bg-white max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="mt-2 text-gray-600">{description.slice(0, 50)}...</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-500 transition-colors"
          onClick={onButtonClick}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
