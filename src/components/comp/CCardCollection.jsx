import React, { useState } from "react";

const CCardCollection = () => {
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
        return "grid-cols-2 sm:grid-cols-3";
      case "full":
      default:
        return "grid-cols-3 sm:grid-cols-4";
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
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200 relative group">
              <img
                className="w-full h-48 object-cover"
                src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="A pair of stylish shoes"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">Stylish Shoes</h2>
                <p className="text-gray-700 text-base mb-2">$79.99</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-300 flex flex-col justify-center items-center text-white p-4">
                <h2 className="font-bold text-2xl mb-2">Stylish Shoes</h2>
                <p className="text-base mb-4">
                  Step out in style with these fashionable shoes. Perfect for
                  any occasion, offering both comfort and elegance.
                </p>
                <div className="flex flex-wrap -m-1">
                  <span className="m-1 bg-green-500 rounded-full px-3 py-1 text-sm font-semibold">
                    #fashion
                  </span>
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #style
                  </span>
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #comfort
                  </span>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200 relative group">
              <img
                className="w-full h-48 object-cover"
                src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="A pair of stylish shoes"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">Stylish Shoes</h2>
                <p className="text-gray-700 text-base mb-2">$79.99</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-300 flex flex-col justify-center items-center text-white p-4">
                <h2 className="font-bold text-2xl mb-2">Stylish Shoes</h2>
                <p className="text-base mb-4">
                  Step out in style with these fashionable shoes. Perfect for
                  any occasion, offering both comfort and elegance.
                </p>
                <div className="flex flex-wrap -m-1">
                  <span className="m-1 bg-green-500 rounded-full px-3 py-1 text-sm font-semibold">
                    #fashion
                  </span>
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #style
                  </span>
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #comfort
                  </span>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200 relative group">
              <img
                className="w-full h-48 object-cover"
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="A pair of stylish shoes"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">Stylish Shoes</h2>
                <p className="text-gray-700 text-base mb-2">$79.99</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-300 flex flex-col justify-center items-center text-white p-4">
                <h2 className="font-bold text-2xl mb-2">Stylish Shoes</h2>
                <p className="text-base mb-4">
                  Step out in style with these fashionable shoes. Perfect for
                  any occasion, offering both comfort and elegance.
                </p>
                <div className="flex flex-wrap -m-1">
                  <span className="m-1 bg-green-500 rounded-full px-3 py-1 text-sm font-semibold">
                    #fashion
                  </span>
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #style
                  </span>
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #comfort
                  </span>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200 relative group">
              <img
                className="w-full h-48 object-cover"
                src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="A pair of stylish shoes"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">Stylish Shoes</h2>
                <p className="text-gray-700 text-base mb-2">$79.99</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-300 flex flex-col justify-center items-center text-white p-4">
                <h2 className="font-bold text-2xl mb-2">Stylish Shoes</h2>
                <p className="text-base mb-4">
                  Step out in style with these fashionable shoes. Perfect for
                  any occasion, offering both comfort and elegance.
                </p>
                <div className="flex flex-wrap -m-1">
                  <span className="m-1 bg-green-500 rounded-full px-3 py-1 text-sm font-semibold">
                    #fashion
                  </span>
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #style
                  </span>
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #comfort
                  </span>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCardCollection;
