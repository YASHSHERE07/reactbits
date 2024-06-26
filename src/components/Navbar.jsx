import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="pt-10"></div>
      <nav className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-900 p-4 t-10 rounded-2xl text-white flex justify-between items-center mx-5">
        <div className="font-oswald uppercase text-3xl font-semibold">
          ReactBits
        </div>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="hover:bg-gray-700 px-3 py-2 rounded hidden sm:block"
          >
            Home
          </Link>
          <Link
            to="/components"
            className="hover:bg-gray-700 px-3 py-2 rounded hidden sm:block"
          >
            Components
          </Link>
          <Link
            to="/Templates"
            className="hover:bg-gray-700 px-3 py-2 rounded hidden sm:block"
          >
            Templates
          </Link>
          <Link
            to="/documentation"
            className="hover:bg-gray-700 px-3 py-2 rounded hidden sm:block"
          >
            Documentation
          </Link>
        </div>
        <div className="hidden sm:block">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Hire Me
          </button>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-900 p-4 mt-2 rounded-2xl text-white">
          <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-700">
            Home
          </Link>
          <Link
            to="/components"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Components
          </Link>
          <Link
            to="/templates"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Templates
          </Link>
          <Link
            to="/documentation"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Documentation
          </Link>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded">
            Hire Me
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
