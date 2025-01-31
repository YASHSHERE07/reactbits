// src/components/Temp1.js
import React, { useState } from "react";
import TempModal from "./TempModal";

const Temp4 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1 className="text-blue-900 text-2xl md:text-4xl w-full shadow-2xl shadow-white font-oswald font-bold p-4 md:p-10">
        E-Commerce Store : Home Page
      </h1>
      <div className="flex justify-end pr-5 md:pr-20">
        <button
          onClick={handleOpenModal}
          className="py-2 px-4 bg-[#FF004D] rounded-xl shadow-2xl border-[#0079FF] border-2 text-white mb-10"
        >
          Get code
        </button>
      </div>

      <TempModal isOpen={isModalOpen} onClose={handleCloseModal} page="Temp4" />

      <div className="max-w-full md:max-w-[1600px] justify-center">
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

          <section>
            <div className="pt-20 md:pt-36 mx-5 md:mx-20 flex flex-col md:flex-row justify-between items-center">
              <div>
                <div className="max-w-full md:max-w-3xl font-source-sans text-center text-5xl md:text-[120px] uppercase text-black font-bold">
                  New Summer
                </div>
                <div className="max-w-full md:max-w-3xl font-source-sans text-center text-5xl md:text-[120px] uppercase text-black font-bold ">
                  Collection
                </div>
                <p className="max-w-full md:max-w-2xl text-sm md:text-xl text-gray-500 ml-5 md:ml-10">
                  Shop the best clothes in the world
                </p>
                <button className="text-black uppercase font-semibold text-sm md:text-xl mt-5 md:mt-10 ml-5 md:ml-10 py-2 px-4 border rounded-full bg-purple-400">
                  Shop Now
                </button>
              </div>
              <div className="shadow-2xl mt-5 md:mt-0 mr-5 md:mr-10">
                <img
                  src="https://images.pexels.com/photos/5444971/pexels-photo-5444971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="rounded-3xl"
                />
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto px-4 py-8 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-10">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/7691227/pexels-photo-7691227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Fitness Workout"
                      className="rounded-lg shadow-lg hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-xl md:text-3xl text-white px-4 py-2 rounded-lg">
                      <p>Formal Clothes</p>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/2479928/pexels-photo-2479928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Healthy Lifestyle"
                      className="rounded-lg shadow-lg hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-xl md:text-3xl text-white px-4 py-2 rounded-lg">
                      <p>Street Style Clothes</p>
                    </div>
                  </div>
                </div>
                {/* Right Column */}
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Nutrition and Exercise"
                    className="rounded-lg shadow-lg h-full transition hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-xl md:text-3xl text-white px-4 py-2 rounded-lg">
                    <p>Casual Clothes</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="workout-programs" className="py-8 md:py-16">
            <div className="container mx-auto px-4">
              <div>
                <h2 className="text-5xl md:text-7xl text-center font-extrabold mb-8">
                  SALE
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-28">
                <div className="bg-white flex flex-col border border-black rounded-lg shadow-lg text-white transition hover:-translate-y-6">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-young-adult-wearing-hoodie-mockup_23-2149296262.jpg?t=st=1717142574~exp=1717146174~hmac=7c585a56e10b368a0585b5cdca1362de1621697751381ad4d309291c2f1942ed&w=740"
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
                    src="https://img.freepik.com/free-photo/beautiful-woman-wearing-co-ord-outfits-closeup-shot_53876-128787.jpg?t=st=1717140433~exp=1717144033~hmac=f6cdbee5f34bfd6ee79c644c03a773dc05e0b87f3b69f29a037a840850ccdff6&w=740"
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
                    src="https://img.freepik.com/free-photo/portrait-young-adult-wearing-hoodie-mockup_23-2149296291.jpg?t=st=1717142628~exp=1717146228~hmac=5cbc64ff498f91690429d016b3f9410d0a6fe59e838583906d2a6f156b793340&w=740"
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
          <section>
            <div
              className="h-[200px] md:h-[400px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/5926238/pexels-photo-5926238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              }}
            >
              <div className="max-w-full md:max-w-3xl font-oswald px-8 md:px-16 pt-10 md:pt-20">
                <h1 className="text-black text-4xl md:text-7xl uppercase">
                  Limited Edition
                </h1>
                <h1 className="text-black text-4xl md:text-7xl">50% OFF</h1>
                <h1 className="text-black text-lg md:text-xl underline">
                  See all collection
                </h1>
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

export default Temp4;
