import React from "react";
import img1 from "../images/resp.gif";
import img2 from "../images/prototype.gif";
import img3 from "../images/reorder.gif";
import img4 from "../images/font.gif";
import img5 from "../images/resp.gif";

const Bentotwo = () => {
  return (
    <div>
      <div className=" h-[300px] mb-8 bg-[#d9f99d] p-4 shadow-2xl rounded-[36px] transition-transform duration-300 hover:scale-105">
        <div className="flex flex-row justify-center  items-center ">
          <img
            src={img4}
            alt="Example"
            className="h-16 w-auto md:h-32  rounded-lg "
          />
        </div>
        <h1 className=" text-[#102C57] font-oswald md:text-2xl  text-xl  font-bold">
          Customize with Ease
        </h1>
        <p className="pt-5 text-sm  md:text-lg text-justify">
          Adjust every component to perfectly fit your brand with Name’s
          customizable UI elements, ensuring your site stands out in the digital
          space.
        </p>{" "}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className=" md:col-span-6 h-[300px] bg-[#e9d5ff] md:mr-4 shadow-2xl rounded-[36px] transition-transform duration-300 hover:scale-105">
          <div className=" flex justify-center">
            <img
              src={img3}
              alt="Example"
              className="h-20 sm:w-auto  rounded-lg "
            />
          </div>
          <h1 className=" px-4 text-[#102C57] font-oswald md:text-2xl  text-xl  font-bold">
            Creative Freedom
          </h1>
          <p className=" px-4 text-sm  md:text-lg text-justify">
            Name enhances your creative process, enabling limitless design
            possibilities from blogs to complex e-commerce platforms.
          </p>
        </div>
        <div className="md:col-span-6 h-[300px] bg-[#c7d2fe] md:ml-4 shadow-2xl rounded-[36px] transition-transform duration-300 hover:scale-105">
          <div className=" flex justify-center">
            <img
              src={img2}
              alt="Example"
              className="h-20 sm:w-auto  rounded-lg "
            />
          </div>
          <h1 className=" px-4 text-[#102C57] font-oswald md:text-2xl  text-xl  font-bold">
            Speed Up with Rapid Prototyping
          </h1>
          <p className=" px-4 text-sm  md:text-lg text-justify">
            Quickly turn ideas into reality with Name’s tools, designed for fast
            prototyping to keep you ahead in a rapidly changing tech landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bentotwo;
