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

const Home: React.FC = () => {

  return (
     <div>
        <Navbar />
        <HeroSection/>
        <Aboutcompo/>
        <Courses/>
        <Why/>y
        <ResultSection bgColor="bg-secondary" />   {/* Dark Background */}
        <ResultSection bgColor="bg-white text-black" />  {/* White Background with Black Text */}
        <ResultSection bgColor="bg-secondary" />   {/* Dark Background */}
        <ResultSection bgColor="bg-white text-black" />  {/* White Background with Black Text */}
        <Testimonial/>
        <Footer/>

     </div>
  );
};

export default Home;
