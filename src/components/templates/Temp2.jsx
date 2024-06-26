// src/components/Temp2.js
import React, { useState } from "react";
import TempModal from "./TempModal";

const Temp2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1 className="text-blue-900 text-4xl w-full shadow-2xl shadow-white font-oswald font-bold p-10">
        Landing Page: E-Bike Startup Landing Page
      </h1>
      <div className="flex justify-end pr-20">
        <button
          onClick={handleOpenModal}
          className="py-2 px-4 bg-[#FF004D] rounded-xl shadow-2xl border-[#0079FF] border-2 text-white"
        >
          Get code
        </button>
      </div>

      <TempModal isOpen={isModalOpen} onClose={handleCloseModal} page="Temp2" />
      <div className="min-h-screen mt-10 bg-white border-4 ">
        <header
          className="h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884264.jpg?t=st=1717073024~exp=1717076624~hmac=8e61d74b8b742ff7ea348be4d43df297ba877726abfa2cf6787aa35ea5affc7a&w=1380')",
          }}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center mt-10 mx-24">
              <div className="text-5xl font-oswald font-bold text-white">
                E-JOLT
              </div>
              <nav className="space-x-4 font-oswald text-2xl">
                <a href="#services" className="text-white hover:text-gray-900">
                  Reviews
                </a>

                <a href="#portfolio" className="text-white hover:text-gray-900">
                  Stories
                </a>
                <a href="#contact" className="text-white hover:text-gray-900">
                  Support
                </a>
              </nav>
            </div>
            <div className="flex grid-cols-2  ml-24 mt-10">
              <div className="textwhite">
                <div className="flex flex-col justify-center  mt-14 ">
                  <h1 className="text-6xl uppercase font-bold font-oswald text-gray-100">
                    Take the{" "}
                  </h1>
                  <h1 className="text-8xl uppercase font-bold font-oswald text-[#FF204E]">
                    Streets{" "}
                  </h1>
                  <p className="mt-4 text-left text-lg text-gray-100">
                    Design to fee the road and beyond{" "}
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="pb-10">
            <h1 className="text-8xl text-center mb-10 uppercase font-bold font-oswald text-[#FF204E]">
              POWER{" "}
            </h1>
            <div className=" ml-16 max-w-[400px]">
              <h1 className="text-2xl font-bold text-[#FF204E] ">
                The road is yours
              </h1>
              <p className="text-l">
                An automatic transmission intuitively adapts to deliver the
                power and speed you need from the first kick, creating a
                seamless connection between you and the road.
              </p>{" "}
              <button className="border-2 border-black mt-3 rounded-full px-8 py-2">
                Learn More
              </button>
            </div>
            <div className="flex justify-center space-x-5 mt-5">
              <img
                src="https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884302.jpg?t=st=1717075664~exp=1717079264~hmac=7158c94f04f1dd72bee6d536c3dc5a089906f5a9f611ef25c2cda02effb1e8db&w=740"
                alt=""
                className="w-auto h-[500px] rounded-xl shadow-2xl"
              />
              <img
                src="https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884322.jpg?t=st=1717073435~exp=1717077035~hmac=983e61ea0b92e11f20ff8edb6899ad641d4d09734a2158a3e94d3f9ca385edb4&w=740"
                alt=""
                className="w-auto h-[500px] rounded-xl shadow-2xl"
              />
              <img
                src="https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884234.jpg?t=st=1717075827~exp=1717079427~hmac=295cab550a2253193612007bd63e2080c936967c8f28c566f45ba1634ff63214&w=740"
                alt=""
                className="w-auto h-[500px] rounded-xl shadow-2xl"
              />
            </div>

            <div className=" flex justify-center mt-10 space-x-10 pt-10">
              <div className="w-[300px] py-2 flex flex-col items-center bg-gradient-to-b from-pink-50 to-pink-100   rounded-xl shadow-lg p-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2623/2623722.png"
                  alt="Automated transmission"
                  className="w-12 h-12 rounded-xl shadow-2xl mb-5"
                />
                <h1 className="text-gray-900 font-oswald text-xl font-bold">
                  Automated transmission
                </h1>
                <h2 className="text-gray-900 text-sm">No buttons or gears</h2>
              </div>
              <div className="w-[300px] py-2 flex flex-col items-center bg-gradient-to-b from-pink-50 to-pink-100   rounded-xl shadow-lg p-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3154/3154313.png"
                  alt=""
                  className="w-auto h-12 rounded-xl shadow-2xl mb-5"
                />
                <h1 className="text-gray-900 font-oswald text-xl font-bold">
                  Battery Range
                </h1>
                <h2 className="text-gray-900 text-sm">Upto 70km </h2>
              </div>{" "}
              <div className="w-[300px] py-2 flex flex-col items-center bg-gradient-to-b from-pink-50 to-pink-100   rounded-xl shadow-lg p-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2664/2664715.png"
                  alt=""
                  className="w-auto h-12 rounded-xl shadow-2xl mb-5"
                />
                <h1 className="text-gray-900 font-oswald text-xl font-bold">
                  Connected App
                </h1>
                <h2 className="text-gray-900 text-sm">Positions your ride </h2>
              </div>{" "}
            </div>
          </section>

          <section className="container mx-auto pt-10 bg-gradient-to-r from-slate-900 to-slate-700">
            <h1 className="text-8xl text-center mb-10 uppercase font-bold font-oswald text-white">
              SAFETY{" "}
            </h1>
            <div className=" ml-16 max-w-[400px]">
              <h1 className="text-2xl font-bold text-[#FF204E] ">
                Safety comes fierce{" "}
              </h1>
              <p className="text-l text-white">
                On the patrol at dusk awaken at dawn intesifying Lights and
                hydraulic brakes ever there as you show. And then, you're off.
              </p>{" "}
              <button className="border-2 text-white border-white mt-3 rounded-full px-8 py-2">
                Learn More
              </button>
            </div>
            <div className="flex justify-center space-x-5 mt-5">
              <img
                src="https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884302.jpg?t=st=1717075664~exp=1717079264~hmac=7158c94f04f1dd72bee6d536c3dc5a089906f5a9f611ef25c2cda02effb1e8db&w=740"
                alt=""
                className="w-auto h-[500px] rounded-xl shadow-2xl"
              />
              <img
                src="https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884322.jpg?t=st=1717073435~exp=1717077035~hmac=983e61ea0b92e11f20ff8edb6899ad641d4d09734a2158a3e94d3f9ca385edb4&w=740"
                alt=""
                className="w-auto h-[500px] rounded-xl shadow-2xl"
              />
              <img
                src="https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884234.jpg?t=st=1717075827~exp=1717079427~hmac=295cab550a2253193612007bd63e2080c936967c8f28c566f45ba1634ff63214&w=740"
                alt=""
                className="w-auto h-[500px] rounded-xl shadow-2xl"
              />
            </div>

            <div className=" flex justify-center mt-10 space-x-10 py-10 ">
              <div className="w-[300px] py-2 flex flex-col items-center bg-gradient-to-t from-slate-50 to-slate-200   rounded-xl shadow-lg p-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1952/1952191.png"
                  alt="Automated transmission"
                  className="w-12 h-12 rounded-xl shadow-2xl mb-5"
                />
                <h1 className="text-gray-900 font-oswald text-xl font-bold">
                  Automated transmission
                </h1>
                <h2 className="text-gray-900 text-sm">No buttons or gears</h2>
              </div>
              <div className="w-[300px] py-2 flex flex-col items-center bg-gradient-to-t from-slate-50 to-slate-200   rounded-xl shadow-lg p-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1656/1656974.png"
                  alt=""
                  className="w-auto h-12 rounded-xl shadow-2xl mb-5"
                />
                <h1 className="text-gray-900 font-oswald text-xl font-bold">
                  Battery Range
                </h1>
                <h2 className="text-gray-900 text-sm">Upto 70km </h2>
              </div>{" "}
              <div className="w-[300px] py-2 flex flex-col items-center bg-gradient-to-t from-slate-50 to-slate-200   rounded-xl shadow-lg p-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/788/788006.png"
                  alt=""
                  className="w-auto h-12 rounded-xl shadow-2xl mb-5"
                />
                <h1 className="text-gray-900 font-oswald text-xl font-bold">
                  Connected App
                </h1>
                <h2 className="text-gray-900 text-sm">Positions your ride </h2>
              </div>{" "}
            </div>
          </section>

          <section className="pt-10 mt-10 bg-gradient-to-t from-slate-50 to-pink-100">
            <h1 className="text-8xl text-center mb-10 uppercase font-bold font-oswald text-blue-900">
              COMFORT{" "}
            </h1>
            <div className=" ml-16 max-w-[400px]">
              <h1 className="text-2xl font-bold text-[#FF204E] ">
                Easy Rider{" "}
              </h1>
              <p className="text-l  text-blue-900">
                A minimal , sleek design with every esential detail considered
                for ease of ride and convience of journey. go further in
                comfortable silence.
              </p>{" "}
              <button className="border-2 text-blue-900 border-black mt-3 rounded-full px-8 py-2">
                Learn More
              </button>
            </div>
            <div className="flex justify-center space-x-5 mt-5">
              <img
                src="https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884302.jpg?t=st=1717075664~exp=1717079264~hmac=7158c94f04f1dd72bee6d536c3dc5a089906f5a9f611ef25c2cda02effb1e8db&w=740"
                alt=""
                className="w-auto h-[500px] rounded-xl shadow-2xl"
              />
              <img
                src="https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884322.jpg?t=st=1717073435~exp=1717077035~hmac=983e61ea0b92e11f20ff8edb6899ad641d4d09734a2158a3e94d3f9ca385edb4&w=740"
                alt=""
                className="w-auto h-[500px] rounded-xl shadow-2xl"
              />
              <img
                src="https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884234.jpg?t=st=1717075827~exp=1717079427~hmac=295cab550a2253193612007bd63e2080c936967c8f28c566f45ba1634ff63214&w=740"
                alt=""
                className="w-auto h-[500px] rounded-xl shadow-2xl"
              />
            </div>

            <div className=" flex justify-center mt-10 space-x-10 py-10 ">
              <div className="w-[300px] py-2 flex flex-col items-center bg-gradient-to-t from-slate-50 to-slate-200   rounded-xl shadow-lg p-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4040/4040405.png"
                  alt="Automated transmission"
                  className="w-12 h-12 rounded-xl shadow-2xl mb-5"
                />
                <h1 className="text-gray-900 font-oswald text-xl font-bold">
                  Automated transmission
                </h1>
                <h2 className="text-gray-900 text-sm">No buttons or gears</h2>
              </div>
              <div className="w-[300px] py-2 flex flex-col items-center bg-gradient-to-t from-slate-50 to-slate-200   rounded-xl shadow-lg p-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6590/6590593.png"
                  alt=""
                  className="w-auto h-12 rounded-xl shadow-2xl mb-5"
                />
                <h1 className="text-gray-900 font-oswald text-xl font-bold">
                  Battery Range
                </h1>
                <h2 className="text-gray-900 text-sm">Upto 70km </h2>
              </div>{" "}
              <div className="w-[300px] py-2 flex flex-col items-center bg-gradient-to-t from-slate-50 to-slate-200   rounded-xl shadow-lg p-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4813/4813809.png"
                  alt=""
                  className="w-auto h-12 rounded-xl shadow-2xl mb-5"
                />
                <h1 className="text-gray-900 font-oswald text-xl font-bold">
                  Connected App
                </h1>
                <h2 className="text-gray-900 text-sm">Positions your ride </h2>
              </div>{" "}
            </div>
          </section>
        </main>
        <footer className="bg-gray-800 bg-gradient-to-b from-white to-fuchsia-400 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h1 className="text-4xl text-blue-900 font-oswald font-bold">
                  EJOLT
                </h1>
                <p className="text-sm text-blue-900 ">
                  Leading the way in electric mobility.
                </p>
              </div>
              <div className="flex flex-row text-blue-950 font-oswald  md:flex-row space-y-4 md:space-y-0 md:space-x-8 mr-10">
                <div>
                  <a href="#about" className="text-sm hover:underline">
                    <h1>Reviews </h1>
                  </a>
                </div>
                <a href="#products" className="text-sm hover:underline">
                  Stories
                </a>
                <a href="#contact" className="text-sm hover:underline">
                  Support{" "}
                </a>
              </div>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500">
              &copy; 2024 EJOLT. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Temp2;
