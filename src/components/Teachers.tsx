"use client";
import React from "react";
import { useRouter } from "next/navigation"; // ✅ Next.js router

const DirectorsMessage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex h-svh">
      {/* Left Section with Image */}
      <div className="w-2/5">
        <img
          src="/Teachers.png"
          alt="Director"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section with Content */}
      <div className="w-4/5 flex flex-col justify-center px-40 relative">
        {/* Back Arrow */}
        <button
          onClick={() => router.push("/")}
          aria-label="Go back to homepage"
          title="Go back"
          className="absolute top-16 right-28 text-gray-500 hover:text-gray-800"
        >
          <i className="fas fa-arrow-left text-3xl"></i>
        </button>

        <h2 className="text-4xl font-bold mb-6">Teachers</h2>
        <p className="text-xl leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
          libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
          urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
          semper iaculis condimentum ac, vestibulum eu nisl.
        </p>
      </div>
    </div>
  );
};

export default DirectorsMessage;
