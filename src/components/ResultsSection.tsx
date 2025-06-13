import { useState, useEffect } from "react";
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
    setIndex((prev) =>
      prev === 0 ? results.length - 1 : (prev - 1 + results.length) % results.length
    );
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % results.length);
  };

  // Circularly select 3 items
  const visibleItems = Array.from({ length: itemsPerView }).map((_, i) => {
    const itemIndex = (index + i) % results.length;
    return results[itemIndex];
  });

  return (
    <div className={`flex flex-col justify-center w-full ${bgColor} py-16 items-center text-white`}>
      <h2 className="text-3xl font-bold text-center mb-8">Our Achievers</h2>

      <div className="w-full max-w-6xl px-4 flex justify-center">
        <div className="flex gap-6 w-full justify-center">
          {visibleItems.map((result, i) => (
            <div
              key={i}
              className={`w-1/3 transition-transform transform ${
                i === 1 ? "scale-110" : "scale-90 opacity-60"
              } flex justify-center`}
            >
              <img
                src={result.image}
                alt={`Result ${i + 1}`}
                className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          onClick={prevSlide}
          className="p-3 bg-white bg-opacity-20 backdrop-blur-lg rounded-full shadow-md hover:bg-opacity-40 transition"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        <div className="flex gap-2">
          {Array.from({
            length: Math.ceil(results.length / itemsPerView),
          }).map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-full ${
                i === Math.floor(index / itemsPerView)
                  ? "bg-white"
                  : "bg-white bg-opacity-50"
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
