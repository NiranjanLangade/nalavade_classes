"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";


const testimonials = [
  {
    name: "Ishaan Kulkarni",
    role: "JEE Aspirant — AIR 342",
    quote:
      "The faculty explains every concept from the basics and focuses on problem‑solving. Regular tests and doubt‑solving sessions at this coaching class really boosted my confidence and helped me improve my rank.",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=200"
  },
  {
    name: "Neha Patil",
    role: "Parent of Class 10 Student",
    quote:
      "My son’s performance improved significantly after joining. The teachers are supportive, track progress regularly, and keep parents updated. The personalized attention makes a huge difference.",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200"
  },
  {
    name: "Riya Deshmukh",
    role: "NEET Topper — Score 675/720",
    quote:
      "The study material, test series, and mentorship are outstanding. The environment is highly motivating and the guidance I received here helped me stay disciplined and exam‑ready throughout the year.",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200"
  }
];

export default function ModernTestimonialSlider() {
  const [index, setIndex] = useState(0);

  // Auto‑slide every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full py-12 md:py-20 ">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#00537B" }}>
            Our Students & Parents Speak
          </h2>
          <p className="mt-2 text-gray-600">
            Real stories of growth, guidance, and exam success
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.96 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100"
            >
              <Quote className="w-10 h-10 mb-3" style={{ color: "#FFBA41" }} />

              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                {`"${testimonials[index].quote}"`}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <img
                  src={testimonials[index].avatar}
                  alt={testimonials[index].name}
                  className="w-12 h-12 rounded-full object-cover border-2"
                  style={{ borderColor: "#FFBA41" }}
                />
                <div>
                  <p className="font-semibold" style={{ color: "#00537B" }}>
                    {testimonials[index].name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={prev}
              className="px-4 py-2 rounded-xl shadow border border-gray-200 hover:shadow-md transition"
              style={{ backgroundColor: "white", color: "#00537B" }}
            >
              Prev
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                    i === index ? "scale-125" : "opacity-40"
                  }`}
                  style={{
                    backgroundColor: i === index ? "#FFBA41" : "#00537B"
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="px-4 py-2 rounded-xl shadow border border-gray-200 hover:shadow-md transition"
              style={{ backgroundColor: "white", color: "#00537B" }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
