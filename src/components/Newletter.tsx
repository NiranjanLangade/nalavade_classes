"use client"
import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="bg-green-600 mt-12 py-12 text-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-medium mb-4">
            Newsletter - Stay tuned and get the latest updates
          </h1>
          <span className="text-sm">
            Far far away, behind the word mountains
          </span>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex items-center space-x-4">
          <input
            type="email"
            placeholder="Enter email address"
            className="flex-grow p-4 rounded-md outline-none border-none text-gray-800"
          />
          <button
            className="p-4 bg-white text-green-400 rounded-full hover:bg-gray-200 transition"
            aria-label="Send Email"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
