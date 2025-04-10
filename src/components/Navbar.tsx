"use client"
import Link from 'next/link'
import { useState } from 'react'
import { MdMenu } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className='sticky top-0 z-50'>
                <div className="container bg-white flex items-center justify-between py-4">
                    {/* Logo Section */}
                    <div className='text-2xl flex items-center text-black gap-2 font-bold uppercase'>
                        <img className='w-16 h-16' src="logo.png" alt="logo" />
                        <p>Nalavade</p>
                        <p className='text-primary'>Classes</p>
                    </div>
                    {/* Menu Section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-16 font-semibold text-gray-600'>
                            <li>
                                <Link href="/" className="py-1 px-3 hover:text-primary transition-all duration-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="py-1 px-3 hover:text-primary transition-all duration-200">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses" className="py-1 px-3 hover:text-primary transition-all duration-200">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link href="/achievers" className="py-1 px-3 hover:text-primary transition-all duration-200">
                                    Achievers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="py-1 px-3 hover:text-primary transition-all duration-200">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Mobile Hamburger Section */}
                    <div
                        className='block md:hidden cursor-pointer'
                        aria-label="Toggle menu"
                        onClick={() => setOpen(!open)}
                    >
                        <MdMenu className='text-black' size={30} />
                    </div>
                </div>
            </nav>
            {/* Mobile Menu */}
            {open && <ResponsiveMenu open={open} />}
        </>
    );
};

export default Navbar;
