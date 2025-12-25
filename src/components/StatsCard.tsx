import React from "react";

interface StatItem {
  title: string;
  value: string;
  borderRight?: boolean;
}

const stats: StatItem[] = [
  { title: "Happy Students", value: "12k+", borderRight: true },
  { title: "Years of Expirence", value: "34+", borderRight: true },
  { title: "Expert Facultiess", value: "15+", borderRight: true },
//   { title: "Partners", value: "30+" },
];

const StatsGrid: React.FC = () => {
  return (
    <div className="py-4 md:py-8">
      <div className="border border-gray-200 bg-secondary rounded-xl flex flex-wrap">
        {stats.map((stat, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 py-4">
            <div
              className={` ${
                stat.borderRight
                  ? "md:border-r lg:border-r border-gray-200"
                  : ""
              }`}
            >
              <h2 className="text-white text-4xl lg:text-5xl text-center">
                {stat.value}
              </h2>
              <p className="text-white mb-2 text-center">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;
