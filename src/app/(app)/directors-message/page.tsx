"use client";
import React from "react";
import { useRouter } from "next/navigation";

const DirectorsMessage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      {/* Back Button - Fixed Top Right */}
      <button
        onClick={() => router.back()}
        aria-label="Go back"
        title="Go back"
        className="fixed top-32 right-52 z-50 text-gray-600 hover:text-black"
      >

        <i className="fas fa-arrow-left text-3xl"></i>
      </button>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-screen relative">
        {/* Image Section */}
        <div className="w-full lg:w-2/5 h-64 lg:h-full">
          <img
            src="/DirectorsMessage.png"
            alt="Director"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-4/5 flex flex-col justify-center px-6 lg:px-40 py-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Director's Message</h2>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
            urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
            semper iaculis condimentum ac, vestibulum eu nisl.
          </p>
        </div>
      </div>
    </>
  );
};

export default DirectorsMessage;
