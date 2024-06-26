import React, { useState } from "react";

const BCardCollection = () => {
  const [viewSize, setViewSize] = useState("full");
  const [animate, setAnimate] = useState(false);

  const handleViewSizeChange = (size) => {
    setAnimate(true);
    setTimeout(() => {
      setViewSize(size);
      setAnimate(false);
    }, 300); // Duration should match the transition duration
  };

  const getCardClass = () => {
    switch (viewSize) {
      case "mobile":
        return "flex-col max-w-[330px]  ";
      case "tablet":
        return "max-w-3xl";
      case "full":
        return "max-w-5xl";
    }
  };

  return (
    <div className="rounded-2xl bg-white shadow-lg overflow-hidden">
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
      <div className="mt-10 ml-10">
        <h1 className="font-oswald text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">
          Article Card Resposive{" "}
        </h1>
      </div>
      <div className="flex justify-center">
        <div
          className={`p-4 sm:p-6 flex transition-all duration-300 ease-in-out transform ${
            animate ? "scale-95 opacity-50" : "scale-100 opacity-100"
          } ${getCardClass()}`}
        >
          {viewSize === "mobile" ? (
            <div className="flex flex-col shadow-2xl shadow-blue-400">
              <img
                className="w-full h-48 object-cover  rounded-t-md "
                src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Ocean"
              />
              <div className="p-6">
                <h2 className="font-bold text-2xl mb-2">Amazing Destination</h2>
                <p className="text-sm text-gray-600 mb-4">April 20, 2024</p>
                <p className="text-gray-700 text-base mb-4">
                  Discover the beauty of this amazing destination with stunning
                  views and unforgettable experiences.
                </p>
                <div className="flex flex-wrap mb-4">
                  <span className="bg-green-500 text-white text-xs font-semibold uppercase px-2 py-1 rounded mr-2 mb-2">
                    Featured
                  </span>
                  <span className="bg-gray-200 text-sm font-semibold rounded-full px-3 py-1 text-gray-700 mr-2 mb-2">
                    #adventure
                  </span>
                  <span className="bg-gray-200 text-sm font-semibold rounded-full px-3 py-1 text-gray-700 mr-2 mb-2">
                    #explore
                  </span>
                  <span className="bg-gray-200 text-sm font-semibold rounded-full px-3 py-1 text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                </div>
                <p className="text-gray-600 text-sm">By John Doe</p>
              </div>
            </div>
          ) : (
            <React.Fragment>
              <img
                className="lg:w-1/3 w-full h-48 lg:h-auto object-cover shadow-2xl shadow-blue-400 rounded-l-lg "
                src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Ocean"
              />
              <div className="lg:w-2/3 w-full p-6 flex flex-col justify-between shadow-2xl shadow-blue-400 rounded-r-lg">
                <div>
                  <h2 className="font-bold text-2xl mb-2">
                    Amazing Destination
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">April 20, 2024</p>
                  <p className="text-gray-700 text-base mb-4">
                    Discover the beauty of this amazing destination with
                    stunning views and unforgettable experiences.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap mb-4">
                    <span className="bg-green-500 text-white text-xs font-semibold uppercase px-2 py-1 rounded mr-2 mb-2">
                      Featured
                    </span>
                    <span className="bg-gray-200 text-sm font-semibold rounded-full px-3 py-1 text-gray-700 mr-2 mb-2">
                      #adventure
                    </span>
                    <span className="bg-gray-200 text-sm font-semibold rounded-full px-3 py-1 text-gray-700 mr-2 mb-2">
                      #explore
                    </span>
                    <span className="bg-gray-200 text-sm font-semibold rounded-full px-3 py-1 text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">By John Doe</p>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};
export default BCardCollection;
