import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Courses from '@/components/Courses'

export const metadata = {
  title: "Nalavade Classes – Home",
  description: "Best coaching classes in Satara | Nalavade Classes",
  openGraph: {
    title: "Nalavade Classes",
    description:
      "Top quality coaching and academic support for competitive exams",
    url: "https://www.nalavadeclasses.in/home",
    siteName: "Nalavade Classes",
  },
};

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
