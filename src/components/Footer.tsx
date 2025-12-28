"use client";

import React, { useState, FormEvent } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <footer className="bg-gradient-to-b from-[#00537B] to-[#013D59] text-white py-12 px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 w-full px-10">

        {/* Left Side - Contact & Newsletter */}
        <div>
          <h2 className="text-3xl font-bold">Contact Us</h2>

          <div className="mt-4 border border-gray-300 p-4 rounded-lg flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-200">
              <p>Subscribe to our Newsletter</p>
              <p className="text-sm text-gray-400">for more updates</p>
            </div>
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg mt-3 md:mt-0">
              Subscribe
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-bold">CONTACT INFO</h3>
              <p className="text-gray-300">nalavadeclasses@gmail.com</p>
              <p className="text-gray-300">+91 7709799996 / +91 9923389996</p>
            </div>
            <div>
              <h3 className="font-bold">ADDRESS</h3>
              <p className="text-gray-300">Prabhukunj 24, Deshmukh colony, Opposite to Civil hospital, 
Satara-415001</p>
            </div>
            <div>
              <h3 className="font-bold">SUPPORT</h3>
              <p className="text-gray-300">Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-6 text-2xl">
            <a href="#" className="hover:text-yellow-400 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-400 transition duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400 transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-400 transition duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right Side - Get in Touch Form */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">Get in Touch</h2>
          {/*
            The form will open WhatsApp (web or app) with a prefilled message.
            Set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local (no plus sign, include country code),
            e.g. NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
          */}
          <form
            className="mt-6 space-y-6"
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917709799996";
              const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
              const encoded = encodeURIComponent(text);
              const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
              window.open(url, "_blank");
            }}
          >
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 text-white"
            />
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="G-mail"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 text-white"
            />
            <input
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="Phone"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 text-white"
            />
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 text-white"
            />
            <button type="submit" className="bg-yellow-400 text-black px-6 py-2 rounded-lg mt-3">
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom - Copyright & Credits */}
      <div className="mt-12 border-t border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between px-10 text-gray-400">
        <p>© 2025 All Rights Reserved</p>
        <p>Designed by Ayushi & Developed by Niranjan</p>
      </div>
    </footer>
  );
};

export default Footer;
