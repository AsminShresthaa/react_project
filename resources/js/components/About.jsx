// src/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/500"
              alt="About Us"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <p className="text-lg text-gray-700 mb-4">
              Welcome to My Website. We are dedicated to providing the best services to our customers.
              Our team is passionate about creating innovative solutions that meet your needs.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is to deliver high-quality products that exceed your expectations. We believe in
              the power of technology to transform lives and drive progress.
            </p>
            <p className="text-lg text-gray-700">
              Thank you for choosing us. We look forward to working with you and making a positive impact together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
