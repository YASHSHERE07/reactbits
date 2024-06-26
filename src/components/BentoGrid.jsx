import React from "react";
import Bentotwo from "./Bentotwo";
import phone from "../images/photo.png";
import responsive from "../images/responsive.gif";
import img5 from "../images/browser.gif";
import img6 from "../images/puzzle.gif";

const BentoGrid = () => {
  return (
    <div className="">
      <div className=" bg-[#FBFF88] shadow-2xl  shadow-black max-w-7xl mx-auto  rounded-2xl p-4  shadow-t  my-[50px] text-center">
        <h1 className=" transition-transform duration-300 hover:scale-110  md:text-[100px] text-7xl p-10  font-medium  font-oswald text-[#FF008E] ">
          What We Provide
        </h1>
        <p className="text-[#7900FF] font-medium font-oswald md:text-[30px] text-3xl">
          Just Ctrl +C and Ctrl +V and all set !!!
        </p>
      </div>
      <div className=" max-w-[1065px] mx-auto pt-10  p-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:space-x-8">
          <div className="mb-5 lg:mb-0 col-span-4 bg-white h-auto p-4 shadow-2xl rounded-[36px] transition-transform duration-300 hover:scale-105">
            <div className="relative text-center">
              <img
                src={phone}
                alt="Example"
                className="sm:w-auto h-auto rounded-[36px] p-2"
              />
              <div className="absolute top-0 left-0 right-0 bottom-[315px] flex items-center justify-center  p-[80px]">
                <img
                  src={responsive}
                  alt="Example"
                  className="sm:w-auto h-auto rounded-lg "
                />
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-[120px] flex items-center justify-center">
                <h1 className="text-[#102C57] font-oswald md:text-2xl  text-xl  font-bold">
                  Transform Your Web Development
                </h1>
              </div>
              <div className="absolute top-[180px] md:top-[230px] left-0 right-0 bottom-0 flex items-center justify-center font-source-sans ">
                <h1 className="w-[150px] text-sm md:w-[200px] md:text-lg text-justify">
                  Streamline interface creation with Name's user-friendly
                  Tailwind CSS elements, designed for both developers and
                  designers. Our toolkit adapts to any project, ensuring your
                  designs are both beautiful and functional on any device.
                </h1>
              </div>
            </div>
          </div>
          <div className="sm: md:col-span-8">
            <Bentotwo />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 h-auto md:h-[300px] mt-8">
          <div className="md:col-span-8 col-span-1 bg-[#EBFFFB] p-4 shadow-2xl rounded-[36px] transition-transform duration-300 hover:scale-105">
            <div className="flex flex-row justify-center items-center ">
              <img
                src={img5}
                alt="Example"
                className="h-16 w-auto md:h-64  rounded-lg "
              />

              <h1 className=" text-[#102C57] font-oswald md:text-2xl  text-xl  font-bold">
                Efficient Design Implementation
                <p className="pt-5 text-black font-source-sans font-normal text-sm  md:text-lg text-justify ">
                  Focus more on creativity and less on technicalities with
                  Name’s comprehensive component library, streamlining your
                  workflow for polished results.
                </p>
              </h1>
            </div>
          </div>
          <div className="md:col-span-4 col-span-1 bg-[#fef08a] md:ml-5 shadow-2xl rounded-[36px] transition-transform duration-300 hover:scale-105">
            <div className=" flex justify-center">
              <img
                src={img6}
                alt="Example"
                className="h-20 sm:w-auto  rounded-lg "
              />
            </div>
            <h1 className=" px-4 text-[#102C57] font-oswald md:text-2xl  text-xl  font-bold ">
              Essential Tools, No Extra Cost
            </h1>
            <p className=" px-4 text-sm  md:text-lg text-justify">
              Access over 150 free building blocks with Name, making it easy to
              find everything you need in one place without hidden costs.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-2xl  shadow-black max-w-7xl mx-auto  rounded-2xl p-4  shadow-t  my-[50px] text-center">
        <h1 className="transition-transform duration-300 hover:scale-110  md:text-[100px] text-5xl md:text-7xl p-10 text-center font-semibold  font-oswald text-[#0079FF] ">
          Explore Components{" "}
        </h1>
        <p className="text-[#7900FF] font-oswald md:text-[30px] text-3xl">
          100 + Components and Updating Weekly
        </p>
      </div>
    </div>
  );
};

export default BentoGrid;
