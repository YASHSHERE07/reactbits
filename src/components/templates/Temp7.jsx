// src/components/Temp1.js
import React, { useState } from "react";
import TempModal from "./TempModal";

const Temp7 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1 className="text-blue-900 text-2xl md:text-4xl w-full shadow-2xl shadow-white font-oswald font-bold p-4 md:p-10">
        E-Commerce : Cart Page
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

          <div className="flex justify-center">
            <h1 className="text-7xl uppercase font-oswald lg:mt-16">Cart</h1>
          </div>

          <section className="max-w-full flex justify-center mt-10 ">
            <div className="border-4 p-10 m-3">
              <div className="grid grid-cols-1 md:grid-cols-3 mx-4 md:mx-10 mb-5">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex">
                    <div>
                      <img
                        src="https://img.freepik.com/free-photo/portrait-young-adult-wearing-hoodie-mockup_23-2149296262.jpg"
                        alt="Item 2"
                        className="h-24 w-24 max-w-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="ml-5">
                      <p className="text-base font-semibold text-gray-900">
                        Plain White Tee{" "}
                      </p>
                      <p className="mt-1 mb-0 text-sm text-gray-400">Size XL</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2 mt-4 md:mt-0">
                  <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                    -
                  </button>
                  <div className="flex items-center justify-center bg-gray-100 px-2 text-xs uppercase transition">
                    1
                  </div>
                  <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                    +
                  </button>
                  <p className="shrink-0 w-20 text-base font-semibold text-gray-900 ml-5">
                    $120.00
                  </p>

                  <button className="text-gray-600 transition hover:text-red-600">
                    <span className="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 mx-4 md:mx-10 mb-5">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex">
                    <div>
                      <img
                        src="https://img.freepik.com/free-photo/portrait-young-adult-wearing-hoodie-mockup_23-2149296262.jpg"
                        alt="Item 2"
                        className="h-24 w-24 max-w-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="ml-5">
                      <p className="text-base font-semibold text-gray-900">
                        Plain White Tee{" "}
                      </p>
                      <p className="mt-1 mb-0 text-sm text-gray-400">Size XL</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2 mt-4 md:mt-0">
                  <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                    -
                  </button>
                  <div className="flex items-center justify-center bg-gray-100 px-2 text-xs uppercase transition">
                    1
                  </div>
                  <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                    +
                  </button>
                  <p className="shrink-0 w-20 text-base font-semibold text-gray-900 ml-5">
                    $120.00
                  </p>

                  <button className="text-gray-600 transition hover:text-red-600">
                    <span className="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 mx-4 md:mx-10 mb-5">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex">
                    <div>
                      <img
                        src="https://img.freepik.com/free-photo/portrait-young-adult-wearing-hoodie-mockup_23-2149296262.jpg"
                        alt="Item 2"
                        className="h-24 w-24 max-w-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="ml-5">
                      <p className="text-base font-semibold text-gray-900">
                        Plain White Tee{" "}
                      </p>
                      <p className="mt-1 mb-0 text-sm text-gray-400">Size XL</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2 mt-4 md:mt-0">
                  <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                    -
                  </button>
                  <div className="flex items-center justify-center bg-gray-100 px-2 text-xs uppercase transition">
                    1
                  </div>
                  <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                    +
                  </button>
                  <p className="shrink-0 w-20 text-base font-semibold text-gray-900 ml-5">
                    $120.00
                  </p>

                  <button className="text-gray-600 transition hover:text-red-600">
                    <span className="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6 border-t border-b py-2">
                <div class="flex items-center justify-between">
                  <p class="text-sm text-gray-600">Subtotal</p>
                  <p class="text-lg font-semibold text-gray-900">$360.00</p>
                </div>
                <div class="flex items-center justify-between">
                  <p class="text-sm text-gray-600">Shipping</p>
                  <p class="text-lg font-semibold text-gray-900">$0.00</p>
                </div>
              </div>
              <div class="mt-6 flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Total</p>
                <p class="text-2xl font-semibold text-gray-900">
                  <span class="text-xs font-normal text-gray-400">USD</span>{" "}
                  360.00
                </p>
              </div>
              <div className="flex pt-10 justify-end">
                <button className="justify-end py-2 px-4 bg-purple-500 font-source-sans font-bold rounded-full ">
                  Checkout
                </button>
              </div>
            </div>
          </section>

          <section id="workout-programs" className="py-8 md:py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-oswald font-semibold mx-5 md:mx-28 pb-10">
                More Products
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
                      $120.00
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
                      $120.00
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
                      $120.00
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
                      $120.00
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

export default Temp7;
