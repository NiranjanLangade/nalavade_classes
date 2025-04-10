"use client";
import React from "react";
import Navbar from "./Navbar";
import Aboutcompo from "./Aboutcompo";
import HeroSection from "./HeroSection";
import Courses from "./Courses";
import Why from "./Why";
import Footer from "./Footer";
import ResultsSection from "./ResultsSection";
import Testimonials from "./Testimonial";
import TestimonialSection from "./Testimonial";

const Home: React.FC = () => {

  return (
     <div>
        <Navbar />
        <HeroSection/>
        <Aboutcompo/>
        <Courses/>
        <Why/>
        <ResultsSection/>
        {/* <TestimonialSection/> */}
        <Footer/>

     </div>
  );
};

export default Home;
