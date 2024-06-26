import React, { useState } from "react";

const AHerosCollection = () => {
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
        return "grid-cols-1 max-w-xl sm:grid-cols-1 ";
      case "tablet":
        return "grid-cols-2 max-w-4xl sm:grid-cols-2";
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
          Hero for E-Commerce with  image grid{" "}
        </h1>
        <div className="flex justify-center">
          <div
            className={` grid ${getContainerClass()} bg-[#F2EAD3] p-10  gap-2 sm:gap-4 transition-all duration-300 ease-in-out transform ${
              animate ? "scale-95 opacity-50" : "scale-100 opacity-100"
            }`}
          >
            <div className="text-white flex flex-col justify-center p-6 space-y-4">
              <h1 className="text-4xl text-blue-700  md:text-5xl font-bold animate-fade-in text-center ">
                <span className="bg-[#F4CE14] text-green-900 ">
                  Bold Styles
                </span>{" "}
                for the Modern Men and Women
              </h1>
              <h2 className="text-2xl  md:text-3xl font-semibold animate-fade-in text-center text-[#FFE9B1]">
                <span className=" bg-[#7743DB] px-4">Unleash Your Look</span>
              </h2>
              <div className=" flex justify-center">
                <button className="bg-[#45474B] text-white px-6 py-2 rounded-md  transition w-[200px] transform hover:scale-105">
                  Shop the Trend
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex ">
                <div className="flex-col space-y-5">
                  <div>
                    {" "}
                    <img
                      src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Happy Friends"
                      className="w-auto h-[200px] rounded-md shadow-2xl  transform hover:scale-105 transition"
                    />
                  </div>
                  <div>
                    {" "}
                    <img
                      src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Happy Friends"
                      className="w-[135px] h-[200px] rounded-md shadow-2xl transform hover:scale-105 transition"
                    />
                  </div>
                  <div>
                    {" "}
                    <img
                      src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Happy Friends"
                      className="w-auto h-[200px] rounded-md shadow-2xl transform hover:scale-105 transition"
                    />
                  </div>
                </div>

                <div className="flex-col space-y-5 mx-5">
                  <div>
                    {" "}
                    <img
                      src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Happy Friends"
                      className="w-auto h-[310px] rounded-md shadow-2xl transform hover:scale-105 transition"
                    />
                  </div>
                  <div>
                    {" "}
                    <img
                      src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Happy Friends"
                      className="w-auto h-[310px] rounded-md shadow-2xl transform hover:scale-105 transition"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AHerosCollection;
