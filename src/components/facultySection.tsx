"use client";

import { motion } from "framer-motion";
import FacultyCard from "./facultyCard";
import { facultyList } from "@/data/faculty";

export default function FacultySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF6E5] to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#00537B]">
            Our Expert Faculty
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Highly qualified educators committed to your academic success.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {facultyList.map((faculty, index) => (
            <FacultyCard key={index} faculty={faculty} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
