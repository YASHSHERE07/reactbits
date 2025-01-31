import React, { useState } from "react";

import { Link } from "react-router-dom";
import HoverButton from "./lib/HoverButton";
import ClickButton from "./lib/ClickButton";

const ButtonTab = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div class="bg-white p-4 flex items-center flex-wrap">
        <ul class="flex items-center">
          <li class="inline-flex items-center">
            <a href="#" class="text-gray-600 hover:text-blue-500">
              <svg
                class="w-5 h-auto fill-current mx-2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
              </svg>
            </a>

            <svg
              class="w-5 h-auto fill-current mx-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
          </li>

          <li class="inline-flex items-center">
            <Link to="/components" class="text-gray-600 hover:text-blue-900">
              Component
            </Link>

            <svg
              class="w-5 h-auto fill-current mx-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
          </li>

          <li class="inline-flex items-center">
            <a href="#" class="text-gray-600 hover:text-blue-500">
              Buttons{" "}
            </a>

            <svg
              class="w-5 h-auto fill-current mx-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            ></svg>
          </li>
        </ul>
      </div>
      <div className="border-y-4 m-5 p-2 text-5xl font-semibold">
        <h1 className="ml-4 text-blue-900  font-oswald">Buttons</h1>
      </div>
      <div className="space-y-10 ">

      <HoverButton />
      <hr  className="border-2 border-red-700"/>
      <ClickButton />{" "}
      </div>
    </div>
  );
};

export default ButtonTab;
