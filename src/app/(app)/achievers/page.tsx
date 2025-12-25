'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ResultSection from '@/components/ResultsSection'

const jeeList = [
    {image:"/images/jee/one.jpg"}
];
const neetList = [
    {image:"/images/neet/two.png"},
    {image:"/images/neet/three.png"},
    {image:"/images/neet/four.png"},
];
const sscList = [
    {image:"/images/ssc/one.png"},
    {image:"/images/ssc/two.png"},
    {image:"/images/ssc/three.png"},
    {image:"/images/ssc/six.png"},
    {image:"/images/ssc/eight.png"},
];
const cetList = [
    {image:"/images/cet/two.png"},
    {image:"/images/cet/three.png"},
    {image:"/images/cet/four.png"},
    {image:"/images/cet/five.png"},
    {image:"/images/cet/six.png"},
    {image:"/images/cet/eight.png"},
    {image:"/images/cet/nine.png"},
];

const page = () => {
  return (
    <div>
        <Navbar/>
        <ResultSection results={neetList} bgColor="bg-secondary" />   {/* Dark Background */}
        <ResultSection results={jeeList} bgColor="bg-white text-black" />  {/* White Background with Black Text */}
        <ResultSection results={sscList} bgColor="bg-secondary" />   {/* Dark Background */}
        <ResultSection results={cetList} bgColor="bg-white text-black" />  {/* White Background with Black Text */}
        <Footer/>
    </div>
  )
}

export default page
