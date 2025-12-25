"use-client"
import React from "react";
import { FaUserTie, FaShieldAlt, FaClock, FaDollarSign, FaBuilding, FaCheckCircle } from "react-icons/fa";

const Why = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-20 px-6 md:px-16 py-10">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="/why.png"
          alt="Modern Interior"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10">
        <h3 className="text-secondary text-5xl font-bold mt-4 mb-8">Why Choose Nalavade Classes</h3>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-8">We Deliver Quality Education That Transforms Futures
        </h2>
        <p className="text-gray-600 mt-4">
        At Nalavade Classes, Satara, we are committed to shaping academic excellence through a student-focused approach and expert guidance. Our proven track record of success in IIT-JEE, NEET, CBSE, and SSC board coaching reflects our dedication to every student’s growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center space-x-3">
            <FaCheckCircle className="text-secondary text-xl" />
            <span className="text-gray-700 font-medium">Best Teachers</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaUserTie className="text-secondary text-xl" />
            <span className="text-gray-700 font-medium">Limited Students in Batch </span>
          </div>
          <div className="flex items-center space-x-3">
            <FaShieldAlt className="text-secondary text-xl" />
            <span className="text-gray-700 font-medium">Personal Attention</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaClock className="text-secondary text-xl" />
            <span className="text-gray-700 font-medium">Online/Offline Test-series</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaDollarSign className="text-secondary text-xl" />
            <span className="text-gray-700 font-medium">Combitable Fee Structure</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaBuilding className="text-secondary text-xl" />
            <span className="text-gray-700 font-medium">Consistant Results</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
