// src/components/Temp1.js
import React, { useState } from "react";
import TempModal from "./TempModal";

const Temp6 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <div>
      <h1 className="text-blue-900 text-2xl md:text-4xl w-full shadow-2xl shadow-white font-oswald font-bold p-4 md:p-10">
        E-Commerce Templates : Product Detail{" "}
      </h1>
      <div className="flex justify-end pr-5 md:pr-20">
        <button
          onClick={handleOpenModal}
          className="py-2 px-4 bg-[#FF004D] rounded-xl shadow-2xl border-[#0079FF] border-2 text-white "
        >
          Get code
        </button>
      </div>

      <TempModal isOpen={isModalOpen} onClose={handleCloseModal} page="Temp6" />

      <div className="max-w-full justify-center">
        <div className="min-h-screen bg-white border-4">
          <header>
            <div className="font-source-sans border-b-2 border-black shadow-2xl bg-white container mx-auto px-4 md:px-6 py-4 w-full">
              <div className="flex flex-col md:flex-row justify-between items-center mx-2 md:mx-20 space-y-4 md:space-y-0 space-x-0 md:space-x-10">
                <div className="text-2xl md:text-3xl font-bold text-purple-600 flex">
                  Go <h1 className="text-black">Shop</h1>
                </div>

                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-40 text-sm md:text-xl items-center">
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

          <section className="container mx-auto px-4 py-16">
            <div className="flex md:mx-24 mb-10">
              <ol role="list" className="flex items-center">
                <li className="text-left">
                  <div className="-m-1">
                    <a
                      href="#"
                      className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    >
                      Home
                    </a>
                  </div>
                </li>

                <li className="text-left">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <div className="-m-1">
                      <a
                        href="#"
                        className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                      >
                        Products
                      </a>
                    </div>
                  </div>
                </li>

                <li className="text-left">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <div className="-m-1">
                      <a
                        href="#"
                        className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                        aria-current="page"
                      >
                        Full Sleeve T-Shirt
                      </a>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Image */}
              <div className="grid grid-cols-6 lg:space-x-10 lg:pl-10 ">
                <div className=" col-span-1 pt-10 mx-3 flex flex-col space-y-4 md:space-y-8">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-young-adult-wearing-hoodie-mockup_23-2149296262.jpg"
                    alt="Product Image"
                    className="rounded-lg border-black border shadow-lg h-auto w-24  md:w-32 lg:w-48"
                  />
                  <img
                    src="https://img.freepik.com/free-photo/portrait-young-adult-wearing-hoodie-mockup_23-2149296262.jpg"
                    alt="Product Image"
                    className="rounded-lg shadow-lg h-auto w-24  md:w-32  lg:w-48"
                  />
                  <img
                    src="https://img.freepik.com/free-photo/portrait-young-adult-wearing-hoodie-mockup_23-2149296262.jpg"
                    alt="Product Image"
                    className="rounded-lg shadow-lg h-auto w-24  md:w-32  lg:w-48"
                  />
                </div>

                <div className=" col-span-4 mt-4 lg:mt-0">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-young-adult-wearing-hoodie-mockup_23-2149296262.jpg"
                    alt="Product Image"
                    className="rounded-lg shadow-2xl border-black w-full md:w-[400px]"
                  />
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="flex flex-col space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Full Sleeve T-Shirt
                </h2>
                <div className="flex">
                  <svg
                    className="h-6 w-6 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="h-6 w-6 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="h-6 w-6 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="h-6 w-6 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="h-6 w-6 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <h1 className="text-sm pt-1 text-gray-500 ml-2">
                    1,450 Reviews
                  </h1>
                </div>
                <h1 className="text-2xl font-oswald mt-10">
                  Choose T-shirt Color
                </h1>
                <div className="flex flex-col space-y-2 max-w-[160px] justify-start ">
                  <div className="flex  items-center border-black border py-1 px-4 rounded-xl">
                    <button className="rounded-full text-[#FAC585] bg-[#FAC585]">
                      sda
                    </button>
                    <h1 className="ml-2 font-oswald text-xl">Beige</h1>
                  </div>
                  <div className="flex items-center border-black border py-1 px-4 rounded-xl">
                    <button className="rounded-full text-[#C47530] bg-[#C47530]">
                      sda
                    </button>
                    <h1 className="ml-2 font-oswald text-xl">Brown</h1>
                  </div>
                  <div className="flex items-center border-black border py-1 px-4 rounded-xl">
                    <button className="rounded-full text-[#05697C] bg-[#05697C]">
                      sda
                    </button>
                    <h1 className="ml-2 font-oswald text-xl">Teal</h1>
                  </div>
                </div>
                <p className="text-gray-600 font-source-sans text-lg md:text-xl mb-6">
                  A soft, breathable full-sleeve beige cotton T-shirt perfect
                  for everyday wear. Its classic crew neckline and relaxed fit
                  offer timeless style and comfort.
                </p>
                <div className="flex justify-between border-y-4 py-4 w-full lg:w-[500px]">
                  <div className="text-2xl md:text-3xl font-bold mb-4">
                    Price: $120
                  </div>
                  <button className="py-2 px-4 bg-purple-600 text-white rounded-full hover:bg-purple-700">
                    Add to Cart
                  </button>
                </div>
                <div className="flex flex-col pt-4 w-full lg:w-[500px]">
                  <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 17.93A7.968 7.968 0 014 12c0-4.411 3.589-8 8-8 1.44 0 2.784.38 3.932 1.048A5.5 5.5 0 0111 11.5H8.5a2.5 2.5 0 00-1.942.904A7.962 7.962 0 015 12c0 4.411 3.589 8 8 8 1.179 0 2.3-.263 3.3-.733A5.5 5.5 0 0113 12.5h-1a4 4 0 000 8c.379 0 .74-.052 1.085-.146.343.511.71 1.01 1.097 1.49A7.962 7.962 0 0111 19.93zM19.444 16.292A5.5 5.5 0 0017 12.5a4 4 0 00-8 0H7a6.5 6.5 0 016.228 8.316A8.009 8.009 0 0112 20a8 8 0 00-8-8c0-.562.048-1.114.14-1.656A6.5 6.5 0 0112 6a4 4 0 005.5 3.858A5.504 5.504 0 0012 4a7.969 7.969 0 017.92 7.179c-.248.015-.496.041-.742.076a5.5 5.5 0 00-.734 4.861z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h1 className="text-sm text-gray-600 ml-3">
                      Free Shipping Worldwide
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-600"
                    >
                      <path d="M21 4H3C1.9 4 1 4.9 1 6v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 6h18v2H3V6zm0 12V10h18v8H3z" />
                      <path d="M7 14h4v2H7zM15 14h2v2h-2z" />
                    </svg>
                    <h1 className="text-sm text-gray-600 ml-3">
                      Cancel Anytime
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="workout-programs" className="py-8 md:py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-oswald font-semibold mx-5 md:mx-28 pb-10">
                Similar Products
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-5 md:mx-28">
                <div className="bg-white flex flex-col border border-black rounded-lg shadow-lg text-white transition hover:-translate-y-6">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-young-adult-wearing-hoodie-mockup_23-2149296262.jpg"
                    alt=""
                  />
                  <div className="flex justify-start space-x-1 md:space-x-3 m-2 md:m-4">
                    <div className="rounded-full text-[#FAC585] bg-[#FAC585]">
                      sda
                    </div>
                    <div className="rounded-full text-[#C47530] bg-[#C47530]">
                      sda
                    </div>
                    <div className="rounded-full text-[#05697C] bg-[#05697C]">
                      sda
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-source-sans text-black font-bold mt-2 mx-5 md:mx-10">
                    T shirt
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mx-5 md:mx-10">
                    Turn heads with the Elegant Floral Midi Dress, a perfect
                    blend of sophistication and charm.
                  </p>
                  <div className="flex items-center justify-between my-5 md:my-10 mx-5 md:mx-10">
                    <h1 className="text-black text-lg md:text-xl font-bold">
                      $120
                    </h1>
                    <button className="py-1 md:py-2 px-4 rounded-full border-2 border-purple-700 text-purple-700">
                      BUY
                    </button>
                  </div>
                </div>
                <div className="bg-white flex flex-col border border-black rounded-lg shadow-lg text-white transition hover:-translate-y-6">
                  <img
                    src="https://img.freepik.com/free-photo/beautiful-woman-wearing-co-ord-outfits-closeup-shot_53876-128787.jpg"
                    alt=""
                  />
                  <div className="flex justify-start space-x-1 md:space-x-3 m-2 md:m-4">
                    <div className="rounded-full text-[#FAC585] bg-[#FAC585]">
                      sda
                    </div>
                    <div className="rounded-full text-[#C47530] bg-[#C47530]">
                      sda
                    </div>
                    <div className="rounded-full text-[#05697C] bg-[#05697C]">
                      sda
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-source-sans text-black font-bold mt-2 mx-5 md:mx-10">
                    T shirt
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mx-5 md:mx-10">
                    Turn heads with the Elegant Floral Midi Dress, a perfect
                    blend of sophistication and charm.
                  </p>
                  <div className="flex items-center justify-between my-5 md:my-10 mx-5 md:mx-10">
                    <h1 className="text-black text-lg md:text-xl font-bold">
                      $120
                    </h1>
                    <button className="py-1 md:py-2 px-4 rounded-full border-2 border-purple-700 text-purple-700">
                      BUY
                    </button>
                  </div>
                </div>
                <div className="bg-white flex flex-col border border-black rounded-lg shadow-lg text-white transition hover:-translate-y-6">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-young-adult-wearing-hoodie-mockup_23-2149296291.jpg"
                    alt=""
                  />
                  <div className="flex justify-start space-x-1 md:space-x-3 m-2 md:m-4">
                    <div className="rounded-full text-[#FAC585] bg-[#FAC585]">
                      sda
                    </div>
                    <div className="rounded-full text-[#C47530] bg-[#C47530]">
                      sda
                    </div>
                    <div className="rounded-full text-[#05697C] bg-[#05697C]">
                      sda
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-source-sans text-black font-bold mt-2 mx-5 md:mx-10">
                    T shirt
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mx-5 md:mx-10">
                    Turn heads with the Elegant Floral Midi Dress, a perfect
                    blend of sophistication and charm.
                  </p>
                  <div className="flex items-center justify-between my-5 md:my-10 mx-5 md:mx-10">
                    <h1 className="text-black text-lg md:text-xl font-bold">
                      $120
                    </h1>
                    <button className="py-1 md:py-2 px-4 rounded-full border-2 border-purple-700 text-purple-700">
                      BUY
                    </button>
                  </div>
                </div>

                <div className="bg-white flex flex-col border border-black rounded-lg shadow-lg text-white transition hover:-translate-y-6">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-young-adult-wearing-hoodie-mockup_23-2149296262.jpg"
                    alt=""
                  />
                  <div className="flex justify-start space-x-1 md:space-x-3 m-2 md:m-4">
                    <div className="rounded-full text-[#FAC585] bg-[#FAC585]">
                      sda
                    </div>
                    <div className="rounded-full text-[#C47530] bg-[#C47530]">
                      sda
                    </div>
                    <div className="rounded-full text-[#05697C] bg-[#05697C]">
                      sda
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-source-sans text-black font-bold mt-2 mx-5 md:mx-10">
                    T shirt
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mx-5 md:mx-10">
                    Turn heads with the Elegant Floral Midi Dress, a perfect
                    blend of sophistication and charm.
                  </p>
                  <div className="flex items-center justify-between my-5 md:my-10 mx-5 md:mx-10">
                    <h1 className="text-black text-lg md:text-xl font-bold">
                      $120
                    </h1>
                    <button className="py-1 md:py-2 px-4 rounded-full border-2 border-purple-700 text-purple-700">
                      BUY
                    </button>
                  </div>
                </div>
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

export default Temp6;
