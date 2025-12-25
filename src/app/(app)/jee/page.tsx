"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JeeProgram: React.FC = () => {
  const details = [
    { label: "Admission Mode", value: "Direct" },
    { label: "Batch Starts On", value: "1st Week Of June" },
    { label: "Class Timing", value: "9am - 4pm" },
    { label: "Frequency", value: "5 Days a Week" },
    { label: "Test", value: "Every Saturday" },
    { label: "Batch Size", value: "45 Students" },
  ];

  const tutors = [
    {
      name: "Poonam Raut",
      qualification: "Msc Zoology",
      experience: "15+ years",
      photo: "/images/tutors/poonam_mam.png",
    },
    {
      name: "Raghav Sir",
      qualification: "Mtech, NIT Surat",
      experience: "12 years",
      photo: "/images/tutors/raghav_sir.png",
    },
    {
      name: "Deepal Sir",
      qualification: "PhD Chemistry",
      experience: "8 years",
      photo: "/images/tutors/deepal_sir.png",
    },
  ];

  return (
    <>
    <Navbar/>
    <section className="bg-gradient-to-r from-blue-50 to-white py-10">
      <div className="max-w-5xl mx-auto p-4 space-y-8">
        {/* Banner Image */}
        <motion.img
          src="/banner_jee.png"
          alt="JEE Banner"
          className="w-full rounded-2xl shadow-lg object-cover h-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Details Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 space-y-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800">JEE Program Details</h2>

          <p className="text-gray-600 leading-relaxed">
            Our JEE preparation program is designed to give students the best chance
            at cracking the exam. The curriculum is tailored for intensive learning,
            with regular practice, expert guidance, and periodic testing.
            Join us for a structured approach to mastering Physics, Chemistry, and Mathematics.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {details.map((item) => (
              <div
                key={item.label}
                className="bg-gray-100 rounded-lg p-4 flex flex-col"
              >
                <span className="text-sm font-medium text-gray-500">{item.label}</span>
                <span className="text-lg font-semibold text-gray-800">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tutors Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 text-center">Meet Our Tutors</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {tutors.map((tutor, index) => (
              <motion.div
                key={tutor.name}
                className="bg-white rounded-2xl p-4 flex flex-col items-center text-center shadow-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <img
                  src={tutor.photo}
                  alt={tutor.name}
                  className="w-24 h-24 rounded-full object-cover shadow"
                />
                <h4 className="mt-3 text-lg font-semibold text-gray-800">{tutor.name}</h4>
                <p className="text-gray-600 text-sm">{tutor.qualification}</p>
                <p className="text-gray-500 text-sm">Experience: {tutor.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default JeeProgram;
