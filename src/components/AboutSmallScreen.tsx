"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutSmallScreen: React.FC = () => {
  return (
    <div className="flex flex-col p-4 text-center">
      {/* About Section */}
      <div className="mb-8">
        <h2 className="text-4xl text-secondary font-bold mt-4 mb-6">About Us</h2>
        <h3 className="text-2xl mb-6">Our Mission & Vision</h3>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
        At Nalavade Classes, our vision is to empower the youth of Satara and beyond to achieve academic excellence and transform their aspirations into accomplishments. Since 1990, we have been committed to delivering quality education with integrity, innovation, and a student-first approach. Our mission is to nurture and mentor every learner—especially those preparing for JEE and NEET—by providing a strong conceptual foundation, personalized support, and a result-oriented strategy that leads them to success in India’s most competitive exams. We believe that with the right guidance and consistent effort, every student has the potential to succeed.
        </p>
      </div>

      {/* Image Links Section */}
      <div className="grid grid-cols-1 gap-4">
        <Link href="/directors-message" className="block">
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/DirectorsMessage.png"
              alt="Director's Message"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </Link>

        <Link href="/inspiration" className="block">
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/Inspiration.png"
              alt="Inspiration"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </Link>

        <Link href="/teachers" className="block">
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/Teachers.png"
              alt="Teachers"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default AboutSmallScreen;
