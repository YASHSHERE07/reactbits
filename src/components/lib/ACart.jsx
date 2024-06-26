import React, { useState } from "react";

import ACartCode from "../code/ACartCode";
import ACartCollection from "../comp/ACartCollection";

const ACart = () => {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div className=" max-w-2xl sm:max-w-7xl mx-auto  ">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-t-3xl">
        <button
          className={`px-2 sm:px-4 py-2 focus:outline-none ${
            activeTab === "preview"
              ? "bg-gray-200 rounded-t-2xl font-semibold mt-2 ml-3 sm:mt-3"
              : "text-white font-semibold"
          }`}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
        <button
          className={`px-2 sm:px-4 py-2 focus:outline-none ${
            activeTab === "code"
              ? "bg-gray-200 rounded-t-2xl font-semibold mt-2 sm:mt-3"
              : "text-white font-semibold"
          }`}
          onClick={() => setActiveTab("code")}
        >
          Code
        </button>
      </div>
      <div className="bg-gray-100">
        {activeTab === "preview" && (
          <div className="p-2 sm:p-4 rounded-lg">
            <ACartCollection />{" "}
          </div>
        )}
        {activeTab === "code" && (
          <div className="p-2 sm:p-4 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Code</h2>
            <pre className="text-white p-2 sm:p-4 rounded-lg">
              <ACartCode />
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ACart;
