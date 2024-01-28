// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-white font-bold text-xl">Home</a>
          <a href="/about" className="hidden md:inline-block ml-4 text-gray-300 hover:text-white">About</a>
          <a href="/domain" className="hidden md:inline-block ml-4 text-gray-300 hover:text-white">Domains</a>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
