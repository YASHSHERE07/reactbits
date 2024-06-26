// src/components/Temp1.js
import React, { useState } from "react";
import TempModal from "./TempModal";

const Temp1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1 className="text-blue-900 text-4xl w-full shadow-2xl shadow-white font-oswald font-bold p-10">
        Landing Page: Artistic Social Media Agency
      </h1>
      <div className="flex justify-end pr-20 ">
        <button
          onClick={handleOpenModal}
          className="py-2 px-4 bg-[#FF004D] rounded-xl shadow-2xl border-[#0079FF] border-2 text-white"
        >
          Get code
        </button>
      </div>

      <TempModal isOpen={isModalOpen} onClose={handleCloseModal} page="Temp1" />

      <div className="max-w-[1600px] justify-center">
        <div className="min-h-screen mt-10 bg-white border-4 ">
          <header className="bg-white shadow">
            <div className="   bg-gray-700 container mx-auto px-6 py-4 m-10 rounded-2xl">
              <div className=" flex justify-between items-center">
                <div className="text-xl font-bold text-white">
                  SocialBuzz Agency
                </div>
                <nav className="space-x-4 ">
                  <a href="#services" className="text-white ">
                    Services
                  </a>
                  <a href="#portfolio" className="text-white">
                    Portfolio
                  </a>
                  <a href="#contact" className="text-white">
                    Contact
                  </a>
                </nav>
              </div>
            </div>
          </header>

          <main className="container mx-auto px-6 py-16">
            <section className="grid grid-cols-2 ">
              <div className="flex flex-col justify-center ">
                <h1 className="text-4xl font-bold text-gray-900">
                  Boost Your Social Media Presence
                </h1>
                <p className="mt-4 text-left text-lg text-gray-600">
                  We help you grow your brand on social media platforms.
                </p>
                <button className="mt-8 w-[200px] px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
                  Get Started
                </button>
              </div>
              <div className="text-center">
                <img src="https://placehold.co/600x400" alt="" />
              </div>
            </section>
            <section>
              <div className="w-full h-[100px] mt-10 rounded-xl shadow-2xl flex items-center justify-between bg-gradient-to-r from-slate-900 to-slate-700 px-40">
                <img
                  src="https://cdn-icons-png.freepik.com/256/4138/4138124.png?semt=ais_hybrid"
                  alt="Social Media 1"
                  className="w-16 h-16"
                />
                <img
                  src="https://cdn-icons-png.freepik.com/256/2504/2504792.png?semt=ais_hybrid"
                  alt="Social Media 2"
                  className="w-16 h-16"
                />
                <img
                  src="https://cdn-icons-png.freepik.com/256/4494/4494487.png?semt=ais_hybrid"
                  alt="Social Media 3"
                  className="w-16 h-16"
                />
                <img
                  src="https://cdn-icons-png.freepik.com/256/4494/4494495.png?semt=ais_hybrid"
                  alt="Social Media 4"
                  className="w-16 h-16"
                />
                <img
                  src="https://cdn-icons-png.freepik.com/256/4494/4494497.png?semt=ais_hybrid"
                  alt="Social Media 5"
                  className="w-16 h-16"
                />
                <img
                  src="https://cdn-icons-png.freepik.com/256/4494/4494737.png"
                  alt="Social Media 6"
                  className="w-16 h-16"
                />
                <img
                  src="https://cdn-icons-png.freepik.com/256/4494/4494561.png"
                  alt="Social Media 7"
                  className="w-16 h-16"
                />
              </div>
            </section>
            <section id="services" className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center">
                Our Services
              </h2>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="rounded-xl transition hover:-translate-y-4 hover:bg-gradient-to-r from-amber-500 to-pink-500 ">
                  <div className="bg-[#FBFF88] flex flex-col m-1 p-6 rounded-xl shadow-xl text-center transition">
                    <img
                      src="https://placehold.co/400x300"
                      className="rounded-2xl mb-5 border-purple-900 border-4 ring-purple-500 ring-8"
                      alt=""
                    />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Content Creation
                    </h3>
                    <p className="mt-4 text-gray-600">
                      Engaging content tailored for your audience. Lorem ipsum
                      dolor sit amet consectetur, adipisicing elit. Labore
                      doloremque at porro dignissimos quod repellendus delectus
                      sed, earum quibusdam, corporis ipsum exercitationem quia
                      recusandae alias dolor sint eaque eius sunt!
                    </p>
                  </div>
                </div>

                <div className="rounded-xl transition hover:-translate-y-4 hover:bg-gradient-to-r from-amber-500 to-pink-500">
                  <div className="bg-[#FBFF88] flex flex-col m-1 p-6 rounded-xl shadow-xl text-center transition">
                    <img
                      src="https://placehold.co/400x300"
                      className="rounded-2xl mb-5 border-purple-900 border-4 ring-purple-500 ring-8"
                      alt=""
                    />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Social Media Management
                    </h3>
                    <p className="mt-4 text-gray-600">
                      We manage your profiles to maintain a consistent presence.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Labore doloremque at porro dignissimos quod repellendus
                      delectus sed, earum quibusdam, corporis ipsum
                      exercitationem quia recusandae alias dolor sint eaque eius
                      sunt!
                    </p>
                  </div>
                </div>

                <div className="rounded-xl transition hover:-translate-y-4 hover:bg-gradient-to-r from-amber-500 to-pink-500">
                  <div className="bg-[#FBFF88] flex flex-col m-1 p-6 rounded-xl shadow-xl text-center transition">
                    <img
                      src="https://placehold.co/400x300"
                      className="rounded-2xl mb-5 border-purple-900 border-4 ring-purple-500 ring-8"
                      alt=""
                    />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Ad Campaigns{" "}
                    </h3>
                    <p className="mt-4 text-gray-600">
                      Targeted ads to reach your ideal customers. Lorem ipsum
                      dolor sit amet consectetur, adipisicing elit. Labore
                      doloremque at porro dignissimos quod repellendus delectus
                      sed, earum quibusdam, corporis ipsum exercitationem quia
                      recusandae alias dolor sint eaque eius sunt!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="portfolio" className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center">
                Our Portfolio
              </h2>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-[#EBFFFB] col-span-2 p-6 rounded shadow-md">
                  <h3 className="text-2xl font-bold text-gray-900 mb-5">
                    Project One
                  </h3>
                  <img
                    src="https://placehold.co/800x200"
                    className="rounded-2xl border-blue-900 border-4 ring-blue-500 ring-8"
                    alt=""
                  />
                  <p className="mt-4 text-gray-600">
                    Description of the project and its success. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Laudantium
                    necessitatibus ipsam ipsa. Vel temporibus voluptates natus
                    pariatur accusantium voluptate, impedit suscipit
                    consectetur. Repellendus quisquam tempora, minima reiciendis
                    atque corrupti alias!
                  </p>
                </div>
                <div className="bg-[#EBFFFB] p-6 rounded shadow-md flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-5">
                    Project Two
                  </h3>
                  <img
                    src="https://placehold.co/100x50"
                    className="rounded-2xl mb-5 border-blue-900 border-4 ring-blue-500 ring-8"
                    alt=""
                  />
                  <p className="mt-4 text-gray-600">
                    Description of the project and its success. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Vitae minima
                    pariatur totam possimus deserunt tempora quo necessitatibus
                    impedit architecto dicta fugiat eligendi est consequuntur
                    autem, labore consectetur deleniti nulla mollitia!
                  </p>
                </div>
                <div className="bg-[#EBFFFB] p-6 rounded shadow-md flex flex-col justify-center">
                  <h3 className="pb-5 text-2xl font-bold text-gray-900 ">
                    Project Three
                  </h3>
                  <img
                    src="https://placehold.co/100x50"
                    className="rounded-2xl mb-5 border-blue-900 border-4 ring-blue-500 ring-8"
                    alt=""
                  />
                  <p className="mt-4 text-gray-600">
                    Description of the project and its success. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Nihil, ex
                    voluptatem vel repudiandae nemo nesciunt tempore velit quam
                    corrupti quis, facere, modi dignissimos. Accusamus
                    reprehenderit quae dicta dolores voluptates cumque?
                  </p>
                </div>

                <div className="bg-[#EBFFFB] p-6 rounded shadow-md flex flex-col justify-center">
                  <h3 className="pb-5 text-2xl font-bold text-gray-900 ">
                    Project Four
                  </h3>
                  <img
                    src="https://placehold.co/100x50"
                    className="rounded-2xl mb-5 border-blue-900 border-4 ring-blue-500 ring-8"
                    alt=""
                  />
                  <p className="mt-4 text-gray-600">
                    Description of the project and its success. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Nihil, ex
                    voluptatem vel repudiandae nemo nesciunt tempore velit quam
                    corrupti quis, facere, modi dignissimos. Accusamus
                    reprehenderit quae dicta dolores voluptates cumque?
                  </p>
                </div>

                <div className="bg-[#EBFFFB] p-6 rounded shadow-md flex flex-col justify-center">
                  <h3 className="pb-5 text-2xl font-bold text-gray-900 ">
                    Project Five
                  </h3>
                  <img
                    src="https://placehold.co/100x50"
                    className="rounded-2xl mb-5 border-blue-900 border-4 ring-blue-500 ring-8"
                    alt=""
                  />
                  <p className="mt-4 text-gray-600">
                    Description of the project and its success. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Nihil, ex
                    voluptatem vel repudiandae nemo nesciunt tempore velit quam
                    corrupti quis, facere, modi dignissimos. Accusamus
                    reprehenderit quae dicta dolores voluptates cumque?
                  </p>
                </div>
              </div>
            </section>

            <section id="contact" className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center">
                Contact Us
              </h2>
              <p className="mt-4 text-center text-gray-600">
                We'd love to hear from you. Reach out to us for any inquiries or
                collaboration opportunities.
              </p>
              <div className="mt-8 flex justify-center">
                <form className="w-full max-w-lg bg-red-600 p-6 rounded shadow-md">
                  <div className="mb-4">
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      rows="4"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-yellow-300 hover:bg-blue-500 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </main>

          <footer className="bg-pink-600 shadow py-6">
            <div className="container mx-auto text-center">
              <p className="text-white">
                &copy; 2024 SocialBuzz Agency. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Temp1;
