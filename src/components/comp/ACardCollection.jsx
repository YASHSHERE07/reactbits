import React, { useState } from "react";

const ACardCollection = () => {
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
          Card Collection
        </h1>
        <div className="flex justify-center">
          <div
            className={` grid ${getContainerClass()}   gap-2 sm:gap-4 transition-all duration-300 ease-in-out transform ${
              animate ? "scale-95 opacity-50" : "scale-100 opacity-100"
            }`}
          >
            {/* Card 1 */}
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <img
                className="w-full h-48 object-cover"
                src="https://images.pexels.com/photos/23909854/pexels-photo-23909854/free-photo-of-a-woman-with-curly-hair-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="A woman with curly hair posing for a photo"
              />
              <div className="p-6">
                <div className="bg-green-500 text-white text-xs font-semibold uppercase px-2 py-1 rounded inline-block mb-4">
                  Featured
                </div>
                <div className="font-bold text-xl mb-2">
                  Amazing Destination
                </div>
                <p className="text-gray-700 text-base mb-4">
                  Discover the beauty of this amazing destination with stunning
                  views and unforgettable experiences.
                </p>
                <div className="flex flex-wrap -m-1">
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #adventure
                  </span>
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #explore
                  </span>
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #travel
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <img
                className="w-full h-48 object-cover"
                src="https://images.pexels.com/photos/4588037/pexels-photo-4588037.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="A scenic mountain view"
              />
              <div className="p-6">
                <div className="bg-blue-500 text-white text-xs font-semibold uppercase px-2 py-1 rounded inline-block mb-4">
                  Popular
                </div>
                <div className="font-bold text-xl mb-2">Mountain Adventure</div>
                <p className="text-gray-700 text-base mb-4">
                  Experience the thrill of mountain adventure with breathtaking
                  views and exhilarating hikes.
                </p>
                <div className="flex flex-wrap -m-1">
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #mountains
                  </span>
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #hiking
                  </span>
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #nature
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <img
                className="w-full h-48 object-cover"
                src="https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="A beautiful sunset at the beach"
              />
              <div className="p-6">
                <div className="bg-red-500 text-white text-xs font-semibold uppercase px-2 py-1 rounded inline-block mb-4">
                  Trending
                </div>
                <div className="font-bold text-xl mb-2">Beach Sunset</div>
                <p className="text-gray-700 text-base mb-4">
                  Relax and enjoy the mesmerizing sunset views at the beautiful
                  beach. Perfect for a serene evening.
                </p>
                <div className="flex flex-wrap -m-1">
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #sunset
                  </span>
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #beach
                  </span>
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #relax
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <img
                className="w-full h-48 object-cover"
                src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="A cityscape view at night"
              />
              <div className="p-6">
                <div className="bg-purple-500 text-white text-xs font-semibold uppercase px-2 py-1 rounded inline-block mb-4">
                  New
                </div>
                <div className="font-bold text-xl mb-2">City Lights</div>
                <p className="text-gray-700 text-base mb-4">
                  Enjoy the vibrant city life with dazzling lights and stunning
                  nightscapes. Perfect for a night out in the town.
                </p>
                <div className="flex flex-wrap -m-1">
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #city
                  </span>
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #nightlife
                  </span>
                  <span className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #urban
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACardCollection;
