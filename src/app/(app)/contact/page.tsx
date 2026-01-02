import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactUs from '@/components/ContactUs'

export const metadata = {
  title: "Nalavade Classes – Home",
  description: "Best coaching classes for students | Nalavade Classes",
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
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default page
