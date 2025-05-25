"use client";
import React from "react";
import { useRouter } from "next/navigation";

const DirectorsMessage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Side - Image */}
      <div className="w-full lg:w-2/5 h-64 lg:h-full">
        <img
          src="/DirectorsMessage.png"
          alt="Director"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-3/5 bg-white px-6 py-6 lg:py-10 lg:px-16 flex flex-col justify-start">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          aria-label="Go back"
          title="Go back"
          className="text-3xl text-black w-fit mb-6"
        >
          ←
        </button>

        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
          Director's Message
        </h2>

        {/* Paragraph */}
        <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
          et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
          condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
          condimentum ac, vestibulum eu nisl.
        </p>
      </div>
    </div>
  );
};

export default DirectorsMessage;
