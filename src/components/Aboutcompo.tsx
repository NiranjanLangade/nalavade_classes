"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import AboutLargeScreen from "./AboutLargeScreen";
import AboutSmallScreen from "./AboutSmallScreen";

const Aboutcompo: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return isMobile ? <AboutSmallScreen /> : <AboutLargeScreen />;
};

export default Aboutcompo;
