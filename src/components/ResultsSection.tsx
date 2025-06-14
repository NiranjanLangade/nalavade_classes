import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const results = [
  { image: "/images/student1.png" },
  { image: "/images/Boards.png" },
  { image: "/images/student1.png" },
  { image: "/images/student1.png" },
  { image: "/images/student1.png" },
  { image: "/images/student1.png" },
];

const ResultSection = ({ bgColor = "bg-secondary" }) => {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Detect screen size for responsiveness
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile
      } else {
        setItemsPerView(3); // Desktop
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const isDarkBackground =
    bgColor.includes("secondary") || bgColor.includes("blue") || bgColor.includes("dark");

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? results.length - 1 : (prev - 1 + results.length) % results.length
    );
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % results.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % results.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleItems = Array.from({ length: itemsPerView }).map((_, i) => {
    const itemIndex = (index + i) % results.length;
    return results[itemIndex];
  });

  return (
    <div className={`flex flex-col justify-center w-full ${bgColor} py-16 items-center text-white`}>
      <h2 className="text-3xl font-bold text-center mb-8">Our Achievers</h2>

      <div className="w-full max-w-6xl px-4 flex justify-center">
        <div className="flex gap-6 w-full justify-center items-center transition-all duration-500">
          {visibleItems.map((result, i) => (
            <div
              key={i}
              className={`w-full sm:w-1/3 transition-transform transform ${
                i === Math.floor(itemsPerView / 2)
                  ? "scale-110"
                  : itemsPerView === 1
                  ? "scale-100"
                  : "scale-90 opacity-60"
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

      {/* Navigation & Indicators */}
      <div className="flex justify-center items-center mt-8 gap-4">
        {/* Previous */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className={`p-3 ${
            isDarkBackground ? "bg-white bg-opacity-20" : "bg-black bg-opacity-10"
          } backdrop-blur-lg rounded-full shadow-md hover:bg-opacity-40 transition`}
        >
          <ChevronLeft size={24} className={isDarkBackground ? "text-white" : "text-black"} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {Array.from({ length: results.length }).map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                i === index
                  ? isDarkBackground
                    ? "bg-white"
                    : "bg-black"
                  : isDarkBackground
                  ? "bg-white bg-opacity-50"
                  : "bg-black bg-opacity-30"
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className={`p-3 ${
            isDarkBackground ? "bg-white bg-opacity-20" : "bg-black bg-opacity-10"
          } backdrop-blur-lg rounded-full shadow-md hover:bg-opacity-40 transition`}
        >
          <ChevronRight size={24} className={isDarkBackground ? "text-white" : "text-black"} />
        </button>
      </div>
    </div>
  );
};

export default ResultSection;
