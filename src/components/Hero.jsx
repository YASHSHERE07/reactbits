import React from "react";

const Hero = () => {
  return (
    <div className="mx-auto max-w-[1500px] rounded-[32px]   p-2  border-8 ">
      <section className="bg-gray-100 rounded-2xl pt-8 pb-4 lg:pt-12 lg:pb-6 xl:pt-16 xl:pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-y-10 md:gap-y-12 lg:grid-cols-2 lg:items-center lg:gap-x-16 xl:gap-x-20">
          <div>
            <div className="space-y-6 text-center md:space-y-7 lg:text-left">
              <h1 className="text-4xl font-bold text-slate-900 lg:text-5xl lg:leading-tight">
                Streamline Website Creation with
                <mark className="bg-transparent text-[#00B2FF]">
                  Templates, Components and more.
                </mark>
              </h1>
              <p className="mx-auto w-11/12 text-lg text-slate-600 sm:w-4/5 lg:mx-0 lg:w-auto lg:text-xl lg:leading-normal xl:text-2xl">
                Explore Our Ready-to-Use Tailwind CSS Components
              </p>
              <div className="space-y-5">
                <div>
                  <button
                    type="submit"
                    className="inline-flex shadow-xl items-center justify-center rounded-lg bg-[#00B2FF] px-6 py-3 text-lg font-bold text-white transition-all duration-200 hover:bg-red-600  focus:outline-none"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
          <figure className="justify-self-center lg:justify-self-stretch">
            <img
              src="https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Tailkits Hero"
              className="w-96 rounded-lg lg:w-full border-4 border-black"
            />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Hero;
