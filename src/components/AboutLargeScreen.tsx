"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutLargeScreen: React.FC = () => {
  return (
    <div className="flex justify-between p-8">
      {/* Left Section */}
      <div className="flex-1 pr-8 ml-12">
        <h2 className="text-5xl text-secondary font-bold mt-4 mb-16">About Us</h2>
        <h3 className="text-3xl mb-16">Our Mission & Vision</h3>
        <p className="text-xl leading-relaxed text-gray-700 mb-4">
        At Nalavade Classes, our vision is to empower the youth of Satara and beyond to achieve academic excellence and transform their aspirations into accomplishments. Since 1990, we have been committed to delivering quality education with integrity, innovation, and a student-first approach. Our mission is to nurture and mentor every learner—especially those preparing for JEE and NEET—by providing a strong conceptual foundation, personalized support, and a result-oriented strategy that leads them to success in India’s most competitive exams. We believe that with the right guidance and consistent effort, every student has the potential to succeed.
        </p>
      </div>

      {/* Right Section */}
      <div
        className="flex-1 grid gap-4"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
          gridTemplateAreas: `
            "directors inspiration"
            "directors teachers"
          `,
        }}
      >
        <Link href="/directors-message" className="block" style={{ gridArea: "directors" }}>
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg group"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/DirectorsMessage.png"
              alt="Director's Message"
              className="w-full h-auto object-cover"
            />
            {/* <p className="absolute bottom-4 left-4 text-white text-lg font-semibold hidden group-hover:block">
              Director's Message
            </p> */}
          </motion.div>
        </Link>

        <Link href="/inspiration" className="block" style={{ gridArea: "inspiration" }}>
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg group"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/Inspiration.png"
              alt="Inspiration"
              className="w-full h-auto object-cover"
            />
            {/* <p className="absolute bottom-4 left-4 text-white text-lg font-semibold hidden group-hover:block">
              Inspiration
            </p> */}
          </motion.div>
        </Link>

        <Link href="/teachers" className="block" style={{ gridArea: "teachers" }}>
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg group"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/Teachers.png"
              alt="Teachers"
              className="w-full h-auto object-cover"
            />
            {/* <p className="absolute bottom-4 left-4 text-white text-lg font-semibold hidden group-hover:block">
              Teachers
            </p> */}
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default AboutLargeScreen;
