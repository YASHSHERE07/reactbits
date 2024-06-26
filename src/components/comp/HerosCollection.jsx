import React, { useState } from "react";

const HerosCollection = () => {
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
        return "flex-cols justify-center max-w-[350px] sm:grid-cols-1";
      case "tablet":
        return "flex-cols justify-center max-w-[650px]  sm:grid-cols-1";
      case "full":
      default:
        return "flex-cols justify-center sm:grid-cols-1";
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
                d="M10 14v4m-4 1h8M1 10h18M2 1h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
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
                d="M7.5 16.5h3M2 1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
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
                d="M1 14h12M1 4h12M6.5 16.5h1M2 1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 sm:p-6 border-x-2 rounded-b-2xl border-b-2">
        <h1 className="font-oswald text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">
          Hero{" "}
        </h1>
        <div className="content-center">
          <div
            className={`${getContainerClass()} bg-gray-900 max-w-7xl h-auto  shadow-2xl border-2 border-gray-300 p-4 rounded-xl gap-2 sm:gap-4 transition-all duration-300 ease-in-out transform ${
              animate ? "scale-95 opacity-50" : "scale-100 opacity-100"
            }`}
          >
            <h1 className=" m-12 font-oswald text-white text-[60px]  text-center">
              Welcome to Tech News Today!
            </h1>
            <span className="flex justify-center ">
              <h3 className="text-l text-white max-w-3xl text-center  text-pretty ">
                {" "}
                Stay ahead with the latest in technology. Subscribe to our
                newsletter for daily updates, trends, and insights from the tech
                world.
              </h3>
            </span>
            <span className="flex justify-center m-10 ">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full sm:w-auto mr-2  rounded-md sm:rounded-l-md focus:outline-none"
              />
              <button className="bg-blue-500 text-white p-2 rounded-md sm:rounded-r-md hover:bg-blue-700 flex items-center">
                Subscribe
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </span>
            <span className="flex justify-center ">
              <h2 className="text-2xl sm:text-3xl text-white font-bold mb-2 font-oswald animate-bounce">
                Why Subscribe?
              </h2>
            </span>
            <span className="flex justify-center ">
              <div className="text-white flex flex-col sm:flex-row text-center max-w-lg sm:max-w-2xl mb-36">
                <p className="mb-2 sm:mb-0 sm:border-r-2 sm:pr-4">
                  🔍 In-depth analysis and insights on the latest tech trends.
                </p>
                <p className="sm:pl-4 ">
                  🚀 Exclusive interviews with industry leaders and innovators.
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerosCollection;
