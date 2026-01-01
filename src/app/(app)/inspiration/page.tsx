"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Inspiration: React.FC = () => {
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
            src="/das_mam.jpeg"
            alt="Director"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-4/5 flex flex-col justify-center px-6 lg:px-40 py-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Our Inspiration</h2>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
            "A tribute to a visionary: Mrs. Ivy H. Das. To the woman who taught Satara that education without discipline is incomplete. Your presence in the classrooms of the 90s was more than just teaching; it was the sculpting of character. Nalavade Classes stands today as a living tribute to your high standards, your firm mentorship, and your belief in every student's potential. We walk the path you cleared for us."
          </p>
        </div>
      </div>
    </>
  );
};

export default Inspiration;
