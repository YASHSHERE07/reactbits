import React, { useState } from "react";

const ACartCollection = () => {
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
        return "grid-cols-1 items-center  sm:grid-cols-1 ";
      case "tablet":
        return "grid-cols-2 w-[700px] sm:grid-cols-2";
      case "full":
      default:
        return "grid-cols-2 w-[900px]  sm:grid-cols-2";
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
          E-commerce Cart{" "}
        </h1>
        <div className="flex justify-center">
          <div
            className={` grid ${getContainerClass()}    gap-2 sm:gap-4 transition-all duration-300 ease-in-out transform ${
              animate ? "scale-95 opacity-50" : "scale-100 opacity-100"
            }`}
          >
            <div className=" flex items-center  h-auto">
              <img
                src="https://unblast.com/wp-content/uploads/2023/10/Blank-T-shirt-Mockup-PSD.jpg"
                alt="Item 2"
                className="h-24 w-24 max-w-full rounded-lg object-cover"
              />
              <div className="pl-5">
                {" "}
                <p className="text-base font-semibold text-gray-900">
                  Plain White Tee{" "}
                </p>
                <p className="mt-1 mb-0 text-sm text-gray-400">Size XL</p>
              </div>
            </div>
            <div className=" flex flex-row  justify-end items-center mr-10 ">
              {" "}
              <button className=" rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                -
              </button>
              <div className="flex py-1 mx-3 items-center bg-white border px-3 text-xs uppercase transition">
                1
              </div>
              <button className="  rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                +
              </button>
              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 ml-5">
                $59.00
              </p>
              <button className="text-gray-600 transition hover:text-red-600">
                <span className="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
            <div className=" flex items-center  h-auto">
              <img
                src="https://unblast.com/wp-content/uploads/2023/10/Blank-T-shirt-Mockup-PSD.jpg"
                alt="Item 2"
                className="h-24 w-24 max-w-full rounded-lg object-cover"
              />
              <div className="pl-5">
                {" "}
                <p className="text-base font-semibold text-gray-900">
                  Plain White Tee{" "}
                </p>
                <p className="mt-1 mb-0 text-sm text-gray-400">Size XL</p>
              </div>
            </div>
            <div className=" flex flex-row  justify-end items-center mr-10 ">
              {" "}
              <button className=" rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                -
              </button>
              <div className="flex py-1 mx-3 items-center bg-white border px-3 text-xs uppercase transition">
                1
              </div>
              <button className="  rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                +
              </button>
              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 ml-5">
                $59.00
              </p>
              <button className="text-gray-600 transition hover:text-red-600">
                <span className="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
            <div className=" flex items-center  h-auto">
              <img
                src="https://unblast.com/wp-content/uploads/2023/10/Blank-T-shirt-Mockup-PSD.jpg"
                alt="Item 2"
                className="h-24 w-24 max-w-full rounded-lg object-cover"
              />
              <div className="pl-5">
                {" "}
                <p className="text-base font-semibold text-gray-900">
                  Plain White Tee{" "}
                </p>
                <p className="mt-1 mb-0 text-sm text-gray-400">Size XL</p>
              </div>
            </div>
            <div className=" flex flex-row  justify-end items-center mr-10 ">
              {" "}
              <button className=" rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                -
              </button>
              <div className="flex py-1 mx-3 items-center bg-white border px-3 text-xs uppercase transition">
                1
              </div>
              <button className="  rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                +
              </button>
              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 ml-5">
                $59.00
              </p>
              <button className="text-gray-600 transition hover:text-red-600">
                <span className="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
            <dt className="max-w-7xl mr-10">
              <span className="flex justify-between items-center">
                <p class="text-l text-gray-500">Subtotal</p>
                <p class="text-lg font-semibold text-gray-900">$177.00</p>
              </span>
              <span className="flex justify-between items-center">
                <p class="text-l text-gray-500">Shipping</p>
                <p class="text-lg font-semibold text-gray-900">$8.00</p>
              </span>
              <span className="flex justify-between border-y border-gray-500 bordr-2 items-center">
                <p class="text-l  font-medium text-gray-900">Total</p>
                <span class="text-lg font-bold text-gray-900">
                  USD 185.00
                </span>{" "}
              </span>
            </dt>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACartCollection;
