import React, { useState } from "react";

const AvatarCollection = () => {
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
        return "grid-cols-1 sm:grid-cols-1";
      case "tablet":
        return "grid-cols-1 sm:grid-cols-1";
      case "full":
      default:
        return "grid-cols-1 sm:grid-cols-1";
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
          Hover on the Avatars
        </h1>
        <div
          className={`grid ${getContainerClass()} gap-2 sm:gap-4 transition-all duration-300 ease-in-out transform ${
            animate ? "scale-95 opacity-50" : "scale-100 opacity-100"
          }`}
        >
          <div className="flex -space-x-5 justify-center max-w-6xl  border-black">
            <div className=" h-24 w-24  rounded-full overflow-hidden  ring ring-gray-200  shadow-2xl shadow-red-800 transitiontransition hover:-translate-y-4">
              <img
                className="h-full w-full rounded-full object-cover transition  "
                src="https://images.pexels.com/photos/21327869/pexels-photo-21327869/free-photo-of-a-woman-in-a-skirt-and-blazer-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="A woman with curly hair posing for a photo"
              />
            </div>
            <div className=" h-24 w-24  rounded-full overflow-hidden  ring ring-gray-200 shadow-2xl shadow-red-800 transition hover:-translate-y-4">
              <img
                className="h-full w-full rounded-full object-cover "
                src="https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="A woman with curly hair posing for a photo"
              />
            </div>
            <div className=" h-24 w-24  rounded-full overflow-hidden  ring ring-gray-200 shadow-2xl shadow-red-800 transition hover:-translate-y-4">
              <img
                className="h-full w-full rounded-full object-cover "
                src="https://images.pexels.com/photos/3633758/pexels-photo-3633758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="A woman with curly hair posing for a photo"
              />
            </div>
            <div className=" h-24 w-24  rounded-full overflow-hidden  ring ring-gray-200 shadow-2xl shadow-red-800 transition hover:-translate-y-4">
              <img
                className="h-full w-full rounded-full object-cover "
                src="https://images.pexels.com/photos/2294492/pexels-photo-2294492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="A woman with curly hair posing for a photo"
              />
            </div>
            <div className=" h-24 w-24 rounded-full overflow-hidden  ring ring-gray-200 shadow-2xl shadow-red-800 transition hover:-translate-y-4 bg-slate-300 flex justify-center items-center ">
              <h1 className=" font-oswald text-5xl text-blue-600">+05</h1>
            </div>
          </div>
          <div className="flex justify-center mt-16 space-x-10">
            {" "}
            <div className=" h-24 w-24  rounded-full overflow-hidden  ring ring-gray-200 shadow-2xl shadow-red-800 transition  hover:scale-110 hover:ring-green-500">
              <img
                className="h-full w-full rounded-full object-cover "
                src="https://images.pexels.com/photos/21327869/pexels-photo-21327869/free-photo-of-a-woman-in-a-skirt-and-blazer-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="A woman with curly hair posing for a photo"
              />
            </div>
            <div className=" h-24 w-24  rounded-full overflow-hidden  ring ring-gray-200 shadow-2xl shadow-red-800 transition  hover:scale-110 hover:ring-red-500">
              <img
                className="h-full w-full rounded-full object-cover "
                src="https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="A woman with curly hair posing for a photo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCollection;
