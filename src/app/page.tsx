"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Aboutcompo from "../components/Aboutcompo";
import HeroSection from "../components/HeroSection";
import Courses from "../components/Courses";
import Why from "../components/Why";
import Footer from "../components/Footer";
import ResultsSection from "../components/ResultsSection";
import Testimonials from "../components/Testimonial";
import TestimonialSection from "../components/Testimonial";
import Testimonial from "../components/Testimonial";
import ResultSection from "../components/ResultsSection";

// const imageList = [
//   { image: "/images/one.png" },
//   { image: "/images/two.png" },
//   { image: "/images/three.png" },
// ];

const jeeList = [
    {image:"/images/jee/one.jpg"}
];
const neetList = [
    {image:"/images/neet/one.png"},
    {image:"/images/neet/two.png"},
    {image:"/images/neet/three.png"},
    {image:"/images/neet/four.png"},
];
const sscList = [
    {image:"/images/ssc/one.png"},
    {image:"/images/ssc/two.png"},
    {image:"/images/ssc/three.png"},
];
const cetList = [
    {image:"/images/cet/one.png"},
    {image:"/images/cet/two.png"},
    {image:"/images/cet/three.png"},
    {image:"/images/cet/four.png"},
];



const Home: React.FC = () => {

  return (
     <div>
        <Navbar />
        <HeroSection/>
        <Aboutcompo/>
        <Courses/>
        <Why/>
        <ResultSection results={neetList} bgColor="bg-secondary" />   {/* Dark Background */}
        <ResultSection results={jeeList} bgColor="bg-white text-black" />  {/* White Background with Black Text */}
        <ResultSection results={sscList} bgColor="bg-secondary" />   {/* Dark Background */}
        <ResultSection results={cetList} bgColor="bg-white text-black" />  {/* White Background with Black Text */}
        <Testimonial/>
        <Footer/>

     </div>
  );
};

export default Home;
