import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const results = [
  { image: "/images/student1.png" },
  { image: "/images/student1.png" },
  { image: "/images/student1.png" },
  { image: "/images/student1.png" },
  { image: "/images/student1.png" },
  { image: "/images/student1.png" },
];

const ResultSection = ({ bgColor = "bg-secondary" }) => {
  const [index, setIndex] = useState(0);
  const itemsPerView = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? results.length - itemsPerView : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev >= results.length - itemsPerView ? 0 : prev + 1));
  };

  return (
    <div className={`flex flex-col items-center justify-center w-full ${bgColor} py-16 text-white`}>
      <h2 className="text-3xl font-bold text-center mb-8">Our Achievers</h2>

      <div className="w-full max-w-6xl overflow-hidden px-4 flex justify-center">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${index * (100 / itemsPerView)}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {results.map((result, i) => (
            <motion.div
              key={i}
              className={`relative w-1/3 min-w-[33.33%] flex justify-center transition-transform transform ${
                i === index + 1 ? "scale-110" : "scale-90 opacity-60"
              }`}
            >
              <img
                src={result.image}
                alt={`Result ${i + 1}`}
                className="w-full h-auto rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Controls Below */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          onClick={prevSlide}
          className="p-3 bg-white bg-opacity-20 backdrop-blur-lg rounded-full shadow-md hover:bg-opacity-40 transition"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        {/* Navigation Dots */}
        <div className="flex gap-2">
          {Array.from({ length: results.length / itemsPerView }).map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-full ${
                i === Math.floor(index / itemsPerView) ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 bg-white bg-opacity-20 backdrop-blur-lg rounded-full shadow-md hover:bg-opacity-40 transition"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ResultSection;
