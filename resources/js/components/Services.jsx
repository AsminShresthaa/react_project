// src/Services.js
import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Service One</h2>
            <p className="text-gray-700 mb-4">
              Description of service one. This service offers great value and is designed to meet your needs.
            </p>
            <a href="#!" className="text-blue-500 hover:text-blue-700">Learn More</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Two</h2>
            <p className="text-gray-700 mb-4">
              Description of service two. This service offers great value and is designed to meet your needs.
            </p>
            <a href="#!" className="text-blue-500 hover:text-blue-700">Learn More</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Three</h2>
            <p className="text-gray-700 mb-4">
              Description of service three. This service offers great value and is designed to meet your needs.
            </p>
            <a href="#!" className="text-blue-500 hover:text-blue-700">Learn More</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Four</h2>
            <p className="text-gray-700 mb-4">
              Description of service four. This service offers great value and is designed to meet your needs.
            </p>
            <a href="#!" className="text-blue-500 hover:text-blue-700">Learn More</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Five</h2>
            <p className="text-gray-700 mb-4">
              Description of service five. This service offers great value and is designed to meet your needs.
            </p>
            <a href="#!" className="text-blue-500 hover:text-blue-700">Learn More</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Six</h2>
            <p className="text-gray-700 mb-4">
              Description of service six. This service offers great value and is designed to meet your needs.
            </p>
            <a href="#!" className="text-blue-500 hover:text-blue-700">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
