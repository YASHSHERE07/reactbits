import React, { useState } from "react";

const ProfileCard = () => {
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
        return "max-w-xs grid-cols-1";
      case "tablet":
        return "max-w-lg grid-cols-2";
      case "full":
      default:
        return "max-w-4xl grid-cols-2";
    }
  };

  const getImageClass = () => {
    if (viewSize === "mobile") {
      return "h-56 w-full rounded-lg object-cover mx-auto";
    } else {
      return "h-56 w-full rounded-lg object-cover md:w-56";
    }
  };

  const getButtonClass = () => {
    if (viewSize === "mobile") {
      return "px-2 py-1 text-xs";
    } else {
      return "px-4 py-2";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <button
          onClick={() => handleViewSizeChange("mobile")}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
        >
          Small
        </button>
        <button
          onClick={() => handleViewSizeChange("tablet")}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
        >
          Medium
        </button>
        <button
          onClick={() => handleViewSizeChange("full")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Large
        </button>
      </div>
      <div
        className={`mx-auto my-10 grid ${getContainerClass()} gap-4 rounded-xl border px-4 py-4 text-center md:text-left transition-all duration-300 ease-in-out transform ${
          animate ? "scale-95 opacity-50" : "scale-100 opacity-100"
        }`}
      >
        <div className="mb-4 md:mb-0">
          <img
            className={getImageClass()}
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xl font-medium text-gray-700">James Edward</p>
            <p className="mb-4 text-sm font-medium text-gray-500">
              Senior Editor
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                <p className="text-sm font-medium text-gray-500">Articles</p>
                <p className="text-3xl font-medium text-gray-600">13</p>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                <p className="text-sm font-medium text-gray-500">Papers</p>
                <p className="text-3xl font-medium text-gray-600">7</p>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                <p className="text-sm font-medium text-gray-500">Followers</p>
                <p className="text-3xl font-medium text-gray-600">2.5k</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 mt-4">
            <button
              className={`w-full rounded-lg border-2 bg-white font-medium text-gray-500 ${getButtonClass()}`}
            >
              Message
            </button>
            <button
              className={`w-full rounded-lg border-2 border-transparent bg-blue-600 font-medium text-white ${getButtonClass()}`}
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
