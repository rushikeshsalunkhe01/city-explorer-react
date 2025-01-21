import React from 'react';

const CityCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50">
      <div className="relative bg-white rounded-3xl shadow-xl w-full max-w-sm p-6 hover:scale-105 transition-transform duration-300">
        {/* Image */}
        <div className="relative h-48 w-full">
          <img
            className="h-full w-full object-cover rounded-2xl"
            src={`${process.env.PUBLIC_URL}/satara.jpg`}
            alt="Satara"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
        </div>

        {/* Content */}
        <div className="mt-4 text-center space-y-2">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Welcome to <span className="text-blue-600">Satara</span>
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Explore the breathtaking landscapes of the Kaas Plateau, immerse yourself in the serene beauty of historic sites, and experience the charm of this cultural haven.
          </p>
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-center">
          <a
            href="#"
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
