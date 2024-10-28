import React from 'react';

const Modal = ({ isOpen, onClose, carDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">{carDetails.name}</h2>
        <p className="text-gray-700">{carDetails.description}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-500 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
