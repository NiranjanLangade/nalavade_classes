"use client";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "IIT-JEE : Mains & Advanced",
    description:
      "Crack India’s toughest engineering entrance exams with Nalavade Classes' IIT-JEE coaching in Satara. Our expert faculty, personalized mentoring, and rigorous test series prepare students for both JEE Mains and JEE Advanced. Get access to in-depth concept clarity, doubt-solving sessions, and previous year paper analysis designed to help you secure a top rank in JEE.",
    image: "/JEE.png",
  },
  {
    id: 2,
    title: "NEET-UG",
    description:
      "Join our highly result-driven NEET-UG coaching program to achieve your dream of becoming a doctor. At Nalavade Classes, we offer focused training in Physics, Chemistry, and Biology, along with mock tests and daily practice sheets tailored to the NEET syllabus. Trusted by NEET toppers in Satara, we’re committed to guiding students towards medical success.",
    image: "/NEET.png",
  },
  {
    id: 3,
    title: "CBSC & SSC Boards 8th-10th",
    description:
      "Build a rock-solid academic foundation with our CBSE and SSC Board coaching for Classes 8th to 10th. With concept-based learning, board-wise strategies, and regular assessments, Nalavade Classes ensures students gain confidence and score high in school and board exams. Perfect for early preparation for competitive exams.",
    image: "/Boards.png",
  },
];

const Courses = () => {
  return (
    <section className="bg-gradient-to-b from-[#00537B] to-[#013D59] py-12 sm:py-16 mt-8 sm:mt-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <h2 className="text-white text-3xl sm:text-5xl font-semibold text-center mt-8 sm:mt-16 mb-8 sm:mb-16">
          Courses we offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="relative w-full h-48 sm:h-52">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill  // ✅ Instead of layout="fill"
                  className="object-cover rounded-t-lg" // ✅ Instead of objectFit="cover"
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <span key={index} className="text-yellow-500">⭐</span>
                    ))}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{course.title}</h3>
                <p className="text-gray-600 mt-2 text-base sm:text-lg">{course.description}</p>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-semibold"
                >
                  Learn more...
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
