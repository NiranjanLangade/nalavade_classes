"use client"
// pages/index.js
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { SlideLeft, SlideUp, SlideRight } from '../utility/animate'
import StatsCard from './StatsCard';

export default function HeroSection() {
    return (
        <>
            <section className='bg-white text-black'>
                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
                    {/* Info Section */}
                    <div className='flex flex-col justify-center py-14 md:py-0 font-Rokkitt'>
                        <div className='text-center md:text-left space-y-6'>
                            <motion.h1
                                variants={SlideLeft(0.6)}
                                initial="hidden"
                                animate="visible"
                                className='text-5xl lg:text-6xl font-bold xl:leading-12'>
                                Let <span className='underline underline-offset-8 decoration-primary text-decoration-thickness: 2px '>Experience</span> Shape Your Success
                            </motion.h1>
                            <motion.p
                                variants={SlideLeft(1.2)}
                                initial="hidden"
                                animate="visible"
                                className='text-gray-600 text-xl xl-max-w-[500px]'>
                                Join Satara's most trusted coaching institute with over 34 years of excellence in shaping careers for JEE and NEET aspirants. At Nalavade Classes, we blend expert faculty, personalized guidance, and result-driven strategies to help you achieve your dream rank.
                            </motion.p>
                        </div>
                        <StatsCard />
                    </div>
                    {/* Image Section */}
                    {/* Image Section */}
                    <div className='hidden md:flex justify-center items-center ml-16'>
                        <motion.img
                            variants={SlideUp(1.2)}
                            initial="hidden"
                            animate="visible"
                            src="/hero.png" alt="Hero Image" className='w-[400px] md:w-[650px] xl:w-[1000px]' />
                    </div>

                </div>
            </section>
        </>
    )
}
