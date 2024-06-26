import React, { useState } from "react";

const DCardCollection = () => {
  const [viewSize, setViewSize] = useState("full");
  const [animate, setAnimate] = useState(false);

  const handleViewSizeChange = (size) => {
    setAnimate(true);
    setTimeout(() => {
      setViewSize(size);
      setAnimate(false);
    }, 300); // Duration should match the transition duration
  };

  const getContainerClass = () => {
    switch (viewSize) {
      case "mobile":
        return "grid-cols-1 sm:grid-cols-1 ";
      case "tablet":
        return "grid-cols-2 sm:grid-cols-2";
      case "full":
      default:
        return "grid-cols-2 sm:grid-cols-2";
    }
  };

  return (
    <div className="rounded-2xl bg-white">
      <div className="flex justify-between items-center rounded-t-2xl border-b-2 border-2 p-2 sm:p-4">
        <div className="space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-[14px] w-[14px] bg-[#FF605C] rounded-full"></div>
            <div className="h-[14px] w-[14px] bg-[#FFBD44] rounded-full"></div>
            <div className="h-[14px] w-[14px] bg-[#00CA4E] rounded-full"></div>
          </div>
        </div>
        <div>
          <button
            onClick={() => handleViewSizeChange("full")}
            className="px-2 sm:px-4 py-2 bg-white-500 text-black rounded mr-2 hover:bg-gray-200"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10 14v4m-4 1h8M1 10h18M2 1h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 0 0 1 1-1Z"
              ></path>
            </svg>
          </button>
          <button
            onClick={() => handleViewSizeChange("tablet")}
            className="px-2 sm:px-4 py-2 text-black rounded mr-2 hover:bg-gray-200"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M7.5 16.5h3M2 1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 0 0 1 1-1Z"
              ></path>
            </svg>
          </button>
          <button
            onClick={() => handleViewSizeChange("mobile")}
            className="px-2 sm:px-4 py-2 text-black rounded hover:bg-gray-200"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M1 14h12M1 4h12M6.5 16.5h1M2 1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 0 0 1 1-1Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 sm:p-6 border-x-2 rounded-b-2xl border-b-2">
        <h1 className="font-oswald text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">
          Hover on the Cards{" "}
        </h1>
        <div className="flex justify-center">
          <div
            className={` grid ${getContainerClass()}   gap-2 sm:gap-4 transition-all duration-300 ease-in-out transform ${
              animate ? "scale-95 opacity-50" : "scale-100 opacity-100"
            }`}
          >
            {/* Card 1 */}
            <div className="flex flex-row mt-10">
              <div className="h-16 absolute  ">
                <img
                  className="object-cover w-[120px] h-[250px] m-5 md:w-[200px] md:h-[300px] rounded-3xl shadow-2xl drop-shadow-2xl  shadow-black transition hover:scale-110 "
                  src="https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="A beautiful tourist destination"
                />
              </div>
              <div className="bg-blue-600 ml-[50px] md:ml-[100px] shadow-2xl  mt-10 h-[300px] md:w-[450px] w-[250px] rounded-3xl">
                <div className=" ml-[100px] md:ml-[140px] mt-3">
                  <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white">
                    Beautiful Beach
                  </h2>
                  <p className="text-white text-base md:text-lg lg:text-xl mb-3 md:mb-8">
                    Maldives
                  </p>

                  <div className="flex items-center md:mb-8  mb-3 ">
                    <span className="text-yellow-500  rounded-2xl">
                      &#11088;
                    </span>
                    <span className="text-yellow-500 ">&#11088;</span>
                    <span className="text-yellow-500 ">&#11088;</span>
                    <span className="text-yellow-500  ">&#11088;</span>

                    <span className="text-white mr-1 text-xl ">&#9733;</span>
                    <span className="text-white text-sm"> 4.0 (6)</span>
                  </div>

                  <div className="flex flex-row md:justify-between w-full md:w-[150px]  mb-3">
                    <div className="mb-1 md:mb-0">
                      <p className="text-white text-base md:text-lg">
                        Duration
                      </p>
                      <p className="text-white text-sm md:text-base">7 days</p>
                    </div>

                    <div className="border-l-2 mx-2 md:pl-4 md:ml-10">
                      <p className="ml-2 text-white text-base md:text-lg">
                        Price
                      </p>
                      <p className="ml-2 text-white text-sm md:text-base">
                        $1500
                      </p>
                    </div>
                  </div>
                  <button className="bg-gray-100 mt-4 text-base hover:bg-red-500 hover:text-white rounded-lg px-4 py-1">
                    {" "}
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-row mt-10">
              <div className="h-16 absolute  ">
                <img
                  className="object-cover w-[120px] h-[250px] m-5 md:w-[200px] md:h-[300px] rounded-3xl shadow-2xl drop-shadow-2xl  shadow-black transition hover:scale-110 "
                  src="https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="A beautiful tourist destination"
                />
              </div>
              <div className="bg-red-500 ml-[50px] md:ml-[100px] shadow-2xl  mt-10 h-[300px] md:w-[450px] w-[250px] rounded-3xl">
                <div className=" ml-[100px] md:ml-[140px] mt-3">
                  <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white">
                    Eiffel Tower{" "}
                  </h2>
                  <p className="text-white text-base md:text-lg lg:text-xl mb-3 md:mb-8">
                    France{" "}
                  </p>

                  <div className="flex items-center md:mb-8  mb-3 ">
                    <span className="text-yellow-500  rounded-2xl">
                      &#11088;
                    </span>
                    <span className="text-yellow-500 ">&#11088;</span>
                    <span className="text-yellow-500 ">&#11088;</span>
                    <span className="text-yellow-500  ">&#11088;</span>

                    <span className="text-white mr-1 text-xl ">&#9733;</span>
                    <span className="text-white text-sm"> 4.0 (6)</span>
                  </div>

                  <div className="flex flex-row md:justify-between w-full md:w-[150px]  mb-3">
                    <div className="mb-1 md:mb-0">
                      <p className="text-white text-base md:text-lg">
                        Duration
                      </p>
                      <p className="text-white text-sm md:text-base">7 days</p>
                    </div>

                    <div className="border-l-2 mx-2 md:pl-4 md:ml-10">
                      <p className="ml-2 text-white text-base md:text-lg">
                        Price
                      </p>
                      <p className="ml-2 text-white text-sm md:text-base">
                        $1500
                      </p>
                    </div>
                  </div>
                  <button className="bg-gray-100 mt-4 text-base hover:bg-red-500 hover:text-white rounded-lg px-4 py-1">
                    {" "}
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-row mt-10">
              <div className="h-16 absolute  ">
                <img
                  className="object-cover w-[120px] h-[250px] m-5 md:w-[200px] md:h-[300px] rounded-3xl shadow-2xl drop-shadow-2xl  shadow-black transition hover:scale-110 "
                  src="https://images.pexels.com/photos/2193268/pexels-photo-2193268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="A beautiful tourist destination"
                />
              </div>
              <div className="bg-emerald-500 ml-[50px] md:ml-[100px] shadow-2xl  mt-10 h-[300px] md:w-[450px] w-[250px] rounded-3xl">
                <div className=" ml-[100px] md:ml-[140px] mt-3">
                  <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white">
                 Opera House{" "}
                  </h2>
                  <p className="text-white text-base md:text-lg lg:text-xl mb-3 md:mb-8">
                  Australia
                  </p>

                  <div className="flex items-center md:mb-8  mb-3 ">
                    <span className="text-yellow-500  rounded-2xl">
                      &#11088;
                    </span>
                    <span className="text-yellow-500 ">&#11088;</span>
                    <span className="text-yellow-500 ">&#11088;</span>
                    <span className="text-yellow-500  ">&#11088;</span>

                    <span className="text-white mr-1 text-xl ">&#9733;</span>
                    <span className="text-white text-sm"> 4.0 (6)</span>
                  </div>

                  <div className="flex flex-row md:justify-between w-full md:w-[150px]  mb-3">
                    <div className="mb-1 md:mb-0">
                      <p className="text-white text-base md:text-lg">
                        Duration
                      </p>
                      <p className="text-white text-sm md:text-base">7 days</p>
                    </div>

                    <div className="border-l-2 mx-2 md:pl-4 md:ml-10">
                      <p className="ml-2 text-white text-base md:text-lg">
                        Price
                      </p>
                      <p className="ml-2 text-white text-sm md:text-base">
                        $1500
                      </p>
                    </div>
                  </div>
                  <button className="bg-gray-100 mt-4 text-base hover:bg-red-500 hover:text-white rounded-lg px-4 py-1">
                    {" "}
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-row mt-10">
              <div className="h-16 absolute  ">
                <img
                  className="object-cover w-[120px] h-[250px] m-5 md:w-[200px] md:h-[300px] rounded-3xl shadow-2xl drop-shadow-2xl  shadow-black transition hover:scale-110 "
                  src="https://images.pexels.com/photos/19149640/pexels-photo-19149640/free-photo-of-pond-and-taj-mahal-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="A beautiful tourist destination"
                />
              </div>
              <div className="  bg-lime-600 ml-[50px] md:ml-[100px] shadow-2xl  mt-10 h-[300px] md:w-[450px] w-[250px] rounded-3xl">
                <div className=" ml-[100px] md:ml-[140px] mt-3">
                  <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white">
                    Taj Mahal{" "}
                  </h2>
                  <p className="text-white text-base md:text-lg lg:text-xl mb-3 md:mb-8">
                    India
                  </p>

                  <div className="flex items-center md:mb-8  mb-3 ">
                    <span className="text-yellow-500  rounded-2xl">
                      &#11088;
                    </span>
                    <span className="text-yellow-500 ">&#11088;</span>
                    <span className="text-yellow-500 ">&#11088;</span>
                    <span className="text-yellow-500  ">&#11088;</span>

                    <span className="text-white mr-1 text-xl ">&#9733;</span>
                    <span className="text-white text-sm"> 4.0 (6)</span>
                  </div>

                  <div className="flex flex-row md:justify-between w-full md:w-[150px]  mb-3">
                    <div className="mb-1 md:mb-0">
                      <p className="text-white text-base md:text-lg">
                        Duration
                      </p>
                      <p className="text-white text-sm md:text-base">7 days</p>
                    </div>

                    <div className="border-l-2 mx-2 md:pl-4 md:ml-10">
                      <p className="ml-2 text-white text-base md:text-lg">
                        Price
                      </p>
                      <p className="ml-2 text-white text-sm md:text-base">
                        $1500
                      </p>
                    </div>
                  </div>
                  <button className="bg-gray-100 mt-4 text-base hover:bg-red-500 hover:text-white rounded-lg px-4 py-1">
                    {" "}
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DCardCollection;
