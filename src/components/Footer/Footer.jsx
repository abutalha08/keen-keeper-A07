import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#2f5d50] text-white py-14 px-5 text-center">
            <div className="max-w-5xl mx-auto">

                <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">
          KeenKeeper
        </h1>

        <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <h3 className="mb-4 text-lg">Social Links</h3>

        <div className="flex justify-center gap-4 mb-8">
          <a href="#" className="bg-white text-[#2d5c4f] w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition">
            <FaInstagram />
          </a>
          <a href="#" className="bg-white text-[#2d5c4f] w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-white text-[#2d5c4f] w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition">
            <FaXTwitter />
          </a>
        </div>

        <hr className="border-t border-[#4c7a6e] mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>

            </div>
        </footer>
    );
};

export default Footer;