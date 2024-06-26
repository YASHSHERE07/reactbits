import React, { useState } from "react";

const FeaturesCollection = () => {
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
        return "grid-cols-1 max-w-[350px] sm:grid-cols-1";
      case "tablet":
        return "grid-cols-1 max-w-[450px]  sm:grid-cols-1";
      case "full":
      default:
        return "grid-cols-4 sm:grid-cols-4";
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
          Filters{" "}
        </h1>
        <div className="content-center">
          <div
            className={`grid ${getContainerClass()} max-w-7xl place-items-center shadow-2xl border-2 border-gray-300 p-4 rounded-xl gap-2 sm:gap-4 transition-all duration-300 ease-in-out transform ${
              animate ? "scale-95 opacity-50" : "scale-100 opacity-100"
            }`}
          >
            
            {" "}
            <div className="flex flex-col items-center mb-4 w-full">
              <h3 className="text-xl font-semibold mb-2 mt-1">Category</h3>
              <select className="form-select block w-full border-2 py-2 rounded-lg border-gray-400">
                <option>Technology</option>
                <option>Health</option>
                <option>Finance</option>
                <option>Education</option>
              </select>
            </div>
            <div className="flex flex-col items-center mb-4 w-full">
              <h3 className="text-xl font-semibold mb-2">Price Range</h3>
              <select className="form-select mt-1 block w-full border-2 py-2 rounded-lg border-gray-400">
                <option>Under $50</option>
                <option>$50 to $100</option>
                <option>Over $100</option>
              </select>
            </div>
            <div className="flex flex-col items-center mb-4 w-full">
              <h3 className="text-xl font-semibold mb-2">Sort By</h3>
              <select className="form-select mt-1 block w-full border-2 py-2 rounded-lg border-gray-400">
                <option>Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="flex flex-col items-center mb-4 w-full">
              <h3 className="text-xl font-semibold mb-2">Brand</h3>
              <select className="form-select mt-1 block w-full border-2 py-2 rounded-lg border-gray-400">
                <option>Brand A</option>
                <option>Brand B</option>
                <option>Brand C</option>
                <option>Brand D</option>
              </select>
            </div>
            <div className="flex justify-center mt-10 mb-4 w-full col-span-full">
              <button className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-4 py-2">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
        <hr  className=" mt-10 border-2 border-red-800"/>

        <div className="mt-[50px]">
          <div className="bg-white p-6 rounded-lg shadow-2xl w-full md:w-1/2 lg:w-1/3 mx-auto mt-10 border-2 border-gray-200 font-source-sans">
            <h2 className="text-2xl font-bold mb-4 text-center">Filters</h2>
            <div className="mb-4">
              <h3 className="text-xl font-medium mb-2  ">Category</h3>
              <div className="flex flex-col mb-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Technology</span>
                </label>

                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Health</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Finance</span>
                </label>
              </div>
              <hr className="border-2 rounded-2xl border-gray-300" />
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Price Range</h3>
              <div className="flex flex-col">
                <label className="inline-flex items-center">
                  <input type="radio" name="price" className="form-radio" />
                  <span className="ml-2">Under $50</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="price" className="form-radio" />
                  <span className="ml-2">$50 to $100</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="price" className="form-radio" />
                  <span className="ml-2">Over $100</span>
                </label>
              </div>
            </div>
            <hr className="border-2 rounded-2xl border-gray-300" />

            <div className="my-4">
              <h3 className="text-xl font-semibold mb-2">Sort By</h3>
              <div className="flex flex-col">
                <label className="inline-flex items-center">
                  <input type="radio" name="sort" className="form-radio" />
                  <span className="ml-2">Relevance</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="sort" className="form-radio" />
                  <span className="ml-2">Price: Low to High</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="sort" className="form-radio" />
                  <span className="ml-2">Price: High to Low</span>
                </label>
              </div>
            </div>
            <hr className="border-2 rounded-2xl border-gray-300" />

            <div className="my-4">
              <h3 className="text-xl font-semibold mb-2">Brand</h3>
              <select className="form-select mt-1 block w-full">
                <option>Brand A</option>
                <option>Brand B</option>
                <option>Brand C</option>
                <option>Brand D</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-4 py-2">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCollection;
