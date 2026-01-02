"use client"

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from "react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Nalavade Classes – Home",
  description: "Best coaching classes in Satara | Nalavade Classes",
  openGraph: {
    title: "Nalavade Classes",
    description:
      "Top quality coaching and academic support for competitive exams",
    url: "https://www.nalavadeclasses.in/home",
    siteName: "Nalavade Classes",
  },
};

const categories = [
  "All",
  "Classrooms",
  "Events",
  "Faculty",
  "Students",
  "Achievements",
];

const images = [
  { id: 1, title: "Modern Classroom", category: "Classrooms", src: "/classroom.png" },
  { id: 2, title: "Classroom 2", category: "Classrooms", src: "/classroom2.png" },
  { id: 3, title: "Classroom 3", category: "Classrooms", src: "/classroom3.png" },
  { id: 4, title: "NEET Seminar", category: "Events", src: "/events.png" },
  { id: 5, title: "Science Fair", category: "Events", src: "/events2.png" },
  { id: 6, title: "Workshop", category: "Events", src: "/events4.png" },
  { id: 7, title: "Event Highlight", category: "Events", src: "/event3.png" },
  { id: 8, title: "Our Faculty", category: "Faculty", src: "/faculty.png" },
  { id: 9, title: "Top Students", category: "Students", src: "/students2.png" },
  { id: 10, title: "Study Session", category: "Students", src: "/students3.png" },
  { id: 11, title: "Group Study", category: "Students", src: "/students4.png" },
  { id: 12, title: "Top Achiever 1", category: "Achievements", src: "/achievement2.png" },
  { id: 13, title: "Top Achiever 2", category: "Achievements", src: "/achievement3.png" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const filteredImages =
    active === "All"
      ? images
      : images.filter((img) => img.category === active);

  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero Section */}
      <section className="w-full bg-[#00537B] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Gallery
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          A glimpse into our classrooms, culture, and achievements
        </p>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full border transition-all text-sm font-medium 
                ${
                  active === cat
                    ? "bg-[#FFBA41] text-black border-[#FFBA41]"
                    : "border-gray-300 text-[#00537B] hover:bg-gray-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={img.src}
                alt={img.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {img.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
    <Footer />
  </>
  );
}
