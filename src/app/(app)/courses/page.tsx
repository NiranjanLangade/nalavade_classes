import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Courses from '@/components/Courses'


const page = () => {
  return (
    <div>
        <Navbar/>
        <Courses/>
        <Footer/>
    </div>
  )
}

export default page
