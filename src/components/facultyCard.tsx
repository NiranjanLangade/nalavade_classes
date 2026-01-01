"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Faculty } from "@/data/faculty";

export default function FacultyCard({ faculty }: { faculty: Faculty }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[#FFBA41] via-[#FFD89A] to-[#00537B] hover:shadow-2xl transition-all"
      aria-label={`Faculty card for ${faculty.name}`}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 min-h-[220px] flex flex-col items-center text-center">
        {/* Experience Badge */}
        <span className="absolute -top-3 right-3 inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full"
          style={{ backgroundColor: "#FFBA41", color: "#00537B" }}>
          {faculty.experience}
        </span>

        {/* Image with gradient ring */}
        <div className="mt-1 p-1 rounded-full bg-gradient-to-br from-[#FFBA41] to-[#00537B]">
          <div className="w-[110px] h-[110px] rounded-full bg-white overflow-hidden flex items-center justify-center">
            <Image
              src={faculty.image}
              alt={faculty.name}
              width={110}
              height={110}
              className="w-full h-full object-fill"
              priority={false}
            />
          </div>
        </div>

        {/* Name & Subject */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-[#00537B]">{faculty.name}</h3>
          <div className="inline-flex items-center gap-2 mt-2">
            <span className="text-sm font-medium px-2 py-1 rounded-md"
              style={{ backgroundColor: "rgba(5,83,123,0.08)", color: "#00537B" }}>
              {faculty.subject}
            </span>
          </div>

          <p className="mt-3 text-sm text-gray-600 max-w-[220px]">🎓 {faculty.education}</p>


        </div>
      </div>
    </motion.div>
  );
}
