import React, { useState } from "react";

const ButtonCollection = () => {
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
        return "grid-cols-3 sm:grid-cols-4";
      case "tablet":
        return "grid-cols-3 sm:grid-cols-5";
      case "full":
      default:
        return "grid-cols-2 sm:grid-cols-6";
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
            onClick={() => handleViewSizeChange("mobile")}
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
            onClick={() => handleViewSizeChange("full")}
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
          Hover on the Buttons
        </h1>
        <div
          className={`grid ${getContainerClass()} gap-2 sm:gap-4 transition-all duration-300 ease-in-out transform ${
            animate ? "scale-95 opacity-50" : "scale-100 opacity-100"
          }`}
        >
          <div className="relative flex items-center justify-center bg-white p-2 sm:p-4">
            <button className="h-12 items-center justify-center rounded-md bg-black px-4 sm:px-6 text-sm sm:text-xl font-bold text-white transition hover:bg-blue-500">
              Button 1
            </button>
          </div>
          <div className="relative flex items-center justify-center bg-white p-2 sm:p-4">
            <button className="h-12 items-center justify-center rounded-md bg-black px-4 sm:px-6 text-sm sm:text-xl font-bold text-white transition hover:scale-125">
              Button 2
            </button>
          </div>
          <div className="relative flex items-center justify-center bg-white p-2 sm:p-4">
            <button className="h-12 items-center justify-center rounded-md bg-black px-4 sm:px-6 text-sm sm:text-xl font-bold text-white transition hover:rotate-45">
              Button 3
            </button>
          </div>
          <div className="relative flex items-center justify-center bg-white p-2 sm:p-4">
            <button className="h-12 items-center justify-center rounded-md bg-black px-4 sm:px-6 text-sm sm:text-xl font-bold text-white transition hover:rotate-180">
              Button 4
            </button>
          </div>
          <div className="relative flex items-center justify-center bg-white p-2 sm:p-4">
            <button className="h-12 items-center justify-center rounded-md bg-black px-4 sm:px-6 text-sm sm:text-xl font-bold text-white transition hover:translate-x-2 hover:rotate-45">
              Button 5
            </button>
          </div>
          <div className="relative flex items-center justify-center bg-white p-2 sm:p-4">
            <button className="h-12 items-center justify-center rounded-md bg-black px-4 sm:px-6 text-sm sm:text-xl font-bold text-white transition hover:translate-x-2">
              Button 6
            </button>
          </div>
          <div className="relative flex items-center justify-center bg-white p-2 sm:p-4">
            <button className="h-12 items-center justify-center rounded-md bg-black px-4 sm:px-6 text-sm sm:text-xl font-bold text-white transition hover:-translate-x-2">
              Button 7
            </button>
          </div>
          <div className="relative flex items-center justify-center bg-white p-2 sm:p-4">
            <button className="h-12 items-center justify-center rounded-md bg-black px-4 sm:px-6 text-sm sm:text-xl font-bold text-white transition hover:translate-y-2">
              Button 8
            </button>
          </div>
          <div className="relative flex items-center justify-center bg-white p-2 sm:p-4">
            <button className="h-12 items-center justify-center rounded-md bg-black px-4 sm:px-6 text-sm sm:text-xl font-bold text-white transition hover:-translate-y-4">
              Button 9
            </button>
          </div>
          <div className="relative flex items-center justify-center bg-white p-2 sm:p-4">
            <button className="h-12 items-center justify-center rounded-md bg-black px-4 sm:px-6 text-sm sm:text-xl font-bold text-white transition hover:translate-x-4 hover:translate-y-4">
              Button 10
            </button>
          </div>
          <div className="relative flex items-center justify-center bg-white p-2 sm:p-4">
            <button className="h-12 items-center justify-center rounded-md bg-black px-4 sm:px-6 text-sm sm:text-xl font-bold text-white transition hover:bg-blue-500 hover:scale-110">
              Button 11
            </button>
          </div>
          <div className="relative flex items-center justify-center bg-white p-2 sm:p-4">
            <button className="h-12 items-center justify-center rounded-md bg-black px-4 sm:px-6 text-sm sm:text-xl font-bold text-white transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]">
              Button 12
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonCollection;
