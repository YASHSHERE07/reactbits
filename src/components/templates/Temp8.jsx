// src/components/Temp1.js
import React, { useState } from "react";
import TempModal from "./TempModal";

const Temp8 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1 className="text-blue-900 text-2xl md:text-4xl w-full shadow-2xl shadow-white font-oswald font-bold p-4 md:p-10">
        E-Commerce : Login Page
      </h1>
      <div className="flex justify-end pr-5 md:pr-20">
        <button
          onClick={handleOpenModal}
          className="py-2 px-4 bg-[#FF004D] rounded-xl shadow-2xl border-[#0079FF] border-2 text-white"
        >
          Get code
        </button>
      </div>

      <TempModal isOpen={isModalOpen} onClose={handleCloseModal} page="Temp7" />

      <div>
        <div className="min-h-screen bg-white border-4 lg:w-[1200px] md:w-[800px]">
          <header>
            <div className="font-source-sans border-b-2 border-black shadow-2xl bg-white container mx-auto px-4 md:px-6 py-4 w-full">
              <div className="flex flex-col md:flex-row justify-between items-center mx-2 md:mx-20 space-y-4 md:space-y-0 space-x-0 md:space-x-10">
                <div className="text-2xl md:text-3xl font-bold text-purple-600 flex">
                  Go <h1 className="text-black">Shop</h1>
                </div>

                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-10 text-sm md:text-xl items-center">
                  <a href="#portfolio" className="text-black">
                    Products
                  </a>
                  <a href="#contact" className="text-black">
                    Contact
                  </a>
                </div>

                <div className="flex space-x-1 md:space-x-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 md:w-6 md:h-6"
                  >
                    <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
                  </svg>
                  <h1 className="mx-1 md:mx-3 font-bold text-sm md:text-xl">
                    |
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 md:w-6 md:h-6"
                  >
                    <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-2.67 0-8 1.335-8 4v2h16v-2c0-2.665-5.33-4-8-4z" />
                  </svg>
                  <h1 className="text-sm md:text-xl">Login/Register</h1>
                </div>
              </div>
            </div>
          </header>

          <section className="max-w-full flex justify-center mt-10 px-4">
            <div className="border border-black w-full md:w-[500px] flex items-center justify-center">
              <div className="bg-white p-8 rounded w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block text-gray-700 mb-2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
                  >
                    Login
                  </button>
                </form>
                <div className="my-4 text-center text-gray-500">or</div>
                <button className="w-full flex items-center justify-center py-2 px-4 bg-white text-gray-700 border rounded shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      d="M21.805 10.023H12v4.028h5.561c-.242 1.236-1.12 2.263-2.266 2.853v2.357h3.668c2.146-1.977 3.382-4.886 3.382-8.238 0-.557-.048-1.1-.14-1.63z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 22.042c2.953 0 5.433-1.012 7.244-2.724l-3.668-2.357c-1.002.672-2.27 1.072-3.576 1.072-2.75 0-5.075-1.854-5.909-4.342H2.265v2.71C4.066 19.933 7.733 22.042 12 22.042z"
                      fill="#34A853"
                    />
                    <path
                      d="M6.091 14.691a5.93 5.93 0 0 1-.311-1.853c0-.648.112-1.276.31-1.853v-2.71H2.265A10.035 10.035 0 0 0 0 12c0 1.642.387 3.2 1.069 4.622l3.022-2.31z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 4.958c1.648 0 3.125.568 4.29 1.685l3.184-3.184C17.433 1.8 14.953.785 12 .785c-4.267 0-7.934 2.11-10.025 5.3L6.09 8.395C6.925 5.907 9.25 4.053 12 4.053z"
                      fill="#EA4335"
                    />
                  </svg>
                  Sign in with Google
                </button>
              </div>
            </div>
          </section>

          <footer className="mt-10 md:mt-20 bg-purple-500 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                  <h1 className="text-2xl font-bold">Women's Fashion</h1>
                  <p className="text-sm">
                    Elevate your style with our exclusive collections.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                  <a href="#home" className="text-sm hover:underline">
                    Home
                  </a>
                  <a href="#about" className="text-sm hover:underline">
                    About Us
                  </a>
                  <a href="#services" className="text-sm hover:underline">
                    Services
                  </a>
                  <a href="#contact" className="text-sm hover:underline">
                    Contact
                  </a>
                </div>
              </div>
              <div className="mt-8 flex justify-center space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div className="mt-8 text-center text-sm text-gray-400">
                &copy; 2024 Women's Fashion. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Temp8;
