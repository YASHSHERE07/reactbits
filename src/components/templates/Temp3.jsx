// src/components/Temp1.js
import React, { useState } from "react";
import TempModal from "./TempModal";

const Temp3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1 className="text-blue-900 text-4xl w-full shadow-2xl shadow-white font-oswald font-bold p-10">
        Landing Page: Artistic Social Media Agency
      </h1>
      <div className="flex justify-end pr-20">
        <button
          onClick={handleOpenModal}
          className="py-2 px-4 bg-[#FF004D] rounded-xl shadow-2xl border-[#0079FF] border-2 text-white mb-10"
        >
          Get code
        </button>
      </div>

      <TempModal isOpen={isModalOpen} onClose={handleCloseModal} page="Temp3" />

      <div className="max-w-[1600px] mx-auto justify-center">
        <div className="min-h-screen bg-[#171717] border-4">
          <header>
            <div className="bg-[#171717] container mx-auto px-6 py-4 m-10">
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-white">WORKOUT</div>
                <nav className="space-x-4 text-sm uppercase hidden sm:flex">
                  <a href="#services" className="text-white">
                    Workout
                  </a>
                  <a href="#portfolio" className="text-white">
                    Programs
                  </a>
                  <a href="#contact" className="text-white">
                    Healthy Living
                  </a>
                  <a href="#contact" className="text-white">
                    Community
                  </a>
                  <a href="#contact" className="text-white">
                    About
                  </a>
                  <a href="#contact" className="text-white">
                    Store
                  </a>
                </nav>
              </div>
            </div>
          </header>
          <section
            className="h-screen mt-10 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5004.jpg?t=st=1717128782~exp=1717132382~hmac=2da449b08aab2b5de67062544c0c453a5808d856645bf8730df95ec03af328f0&w=1380')",
            }}
          >
            <div className="pt-36 ml-5 sm:ml-20">
              <div className="max-w-3xl text-center text-[60px] sm:text-[120px] uppercase text-white font-bold">
                Workout
              </div>
              <div className="max-w-3xl text-center text-[60px] sm:text-[120px] uppercase text-white font-bold -mt-10 sm:-mt-20">
                with me!
              </div>
              <p className="max-w-2xl text-white ml-5 sm:ml-10">
                A huge selection of health and fitness content, healthy recipes
                and transformation stories to help you get fit and stay fit!
              </p>
              <button className="text-white text-xl mt-10 ml-5 sm:ml-10 py-4 px-8 border rounded bg-[#FC5404]">
                Join Club Now
              </button>
              <div className="mt-10 text-white text-xl ml-5 sm:ml-10">
                AS FEATURED IN
              </div>
              <div className="bg-white max-w-xl justify-center ml-5 sm:ml-10 mt-3 rounded-xl shadow-2xl flex flex-wrap sm:flex-row">
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png"
                  alt=""
                  className="w-auto h-12 m-2 sm:m-5"
                />
                <img
                  src="https://logos-world.net/wp-content/uploads/2022/03/BuzzFeed-Logo.png"
                  alt=""
                  className="w-auto h-12 m-2 sm:m-5"
                />
                <img
                  src="https://logos-world.net/wp-content/uploads/2022/01/Barstool-Sports-Logo.png"
                  alt=""
                  className="w-auto h-12 m-2 sm:m-5"
                />
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/05/Gatorade-Logo.png"
                  alt=""
                  className="w-auto h-12 m-2 sm:m-5"
                />
              </div>
            </div>
          </section>

          <section id="workout-programs" className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-white ml-5 sm:ml-28 mb-16">
                <h2 className="text-4xl font-extrabold mb-8">
                  Not sure where to start?
                </h2>
                <p>
                  Programs offer day-to-day guidance on an interactive calendar
                  to keep you on track.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-5 sm:mx-28">
                <div className="bg-[#323443] py-12 flex flex-col items-center justify-center rounded-lg shadow-lg text-white transition hover:-translate-y-6">
                  <h3 className="text-xl font-bold mb-4">Workout Videos</h3>
                  <p className="text-base mx-12">
                    Access to hundreds of free, full-length workout videos.
                  </p>
                </div>
                <div className="bg-[#323443] py-12 flex flex-col items-center justify-center rounded-lg shadow-lg text-white transition hover:-translate-y-6">
                  <h3 className="text-xl font-bold mb-4">Workout Programs</h3>
                  <p className="text-base mx-12">
                    Affordable and effective workout programs.
                  </p>
                </div>
                <div className="bg-[#323443] py-12 flex flex-col items-center justify-center rounded-lg shadow-lg text-white transition hover:-translate-y-6">
                  <h3 className="text-xl font-bold mb-4">Meal Plans</h3>
                  <p className="text-base mx-12">
                    Plans built with registered dietitians and nutritionists.
                  </p>
                </div>
                <div className="bg-[#323443] py-12 flex flex-col items-center justify-center rounded-lg shadow-lg text-white transition hover:-translate-y-6">
                  <h3 className="text-xl font-bold mb-4">WO Plus ALL ACCESS</h3>
                  <p className="text-base mx-12">
                    Add powerful features to your membership.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
                <div className="ml-5 sm:ml-28">
                  <h2 className="text-4xl font-extrabold mb-8 sm:mb-16">
                    Work out at home for free.
                  </h2>
                  <p className="mb-8 text-sm">
                    We believe fitness should be accessible to everyone,
                    everywhere, regardless of income or access to a gym. With
                    hundreds of professional workouts, healthy recipes and
                    informative articles, as well as one of the most positive
                    communities on the web, you’ll have everything you need to
                    reach your personal fitness goals – for free!
                  </p>
                  <a
                    href="#learn-more"
                    className="hover:border-blue-700 border-2 hover:text-blue-700 font-bold py-2 px-6 rounded-full"
                  >
                    See More
                  </a>
                </div>
                <div className="m-10 sm:m-20">
                  <img
                    src="https://img.freepik.com/free-photo/indoor-image-cute-plus-size-young-woman-sitting-mat-front-open-laptop-watching-online-video-tutorial-by-professional-fitness-instructor-exercising-from-home-because-social-distancing_343059-2043.jpg?t=st=1717130603~exp=1717134203~hmac=a3680b313ea56bd28f32cf823589d992c0def6a1ee20e2ec4f7da13eec699e4f&w=1380"
                    alt="Fitness"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="m-10 sm:m-20">
                  <img
                    src="https://img.freepik.com/free-photo/sports-brunette-woman-sportswear-training-gym_1157-30614.jpg?t=st=1717130865~exp=1717134465~hmac=d7db30d6876546dfd02ac67fa7c0f83063ed2dcdd12f128fc00ff2400e30585c&w=1380"
                    alt="Fitness"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="ml-5 sm:ml-28">
                  <h2 className="text-4xl font-extrabold mb-8 sm:mb-16">
                    Get more with low-cost training programs and advanced
                    features.
                  </h2>
                  <p className="mb-8 text-sm">
                    We believe fitness should be accessible to everyone,
                    everywhere, regardless of income or access to a gym. With
                    hundreds of professional workouts, healthy recipes and
                    informative articles, as well as one of the most positive
                    communities on the web, you’ll have everything you need to
                    reach your personal fitness goals – for free!
                  </p>
                  <a
                    href="#learn-more"
                    className="hover:border-blue-700 border-2 hover:text-blue-700 font-bold py-2 px-6 rounded-full"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto px-4">
              <h2 className="text-4xl border-b-4 border-b-slate-700 text-white font-extrabold ml-5 sm:ml-20 pb-8 mb-12">
                Membership Plans
              </h2>
              <div className="grid grid-cols-1 mx-5 sm:mx-56 md:grid-cols-2 gap-8">
                {/* Free Membership Card */}
                <div className="bg-[#323443] text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-center mb-4">
                    Free Membership
                  </h3>
                  <p className="mb-6 px-2 sm:px-12">
                    Reach your fitness goals or maintain your healthy lifestyle
                    with professional training and support from a positive and
                    active online community.
                  </p>
                  <ul className="mb-6 list-disc list-inside px-5 sm:px-20">
                    <li>~600 Workout Videos</li>
                    <li>Customizable Calendar</li>
                    <li>Healthy Recipes</li>
                    <li>Health and Fitness Articles</li>
                    <li>Positive and Supportive Community</li>
                    <li>No Credit Card Needed</li>
                  </ul>
                  <a
                    href="#signup-free"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
                  >
                    Sign Up Free
                  </a>
                </div>

                {/* Premium Membership Card */}
                <div className="bg-[#323443] text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    Premium Membership
                  </h3>
                  <p className="mb-6 px-2 sm:px-12">
                    WO Plus includes everything you get with a free membership
                    and adds brand new convenience features, fitness tools, and
                    unique content.
                  </p>
                  <ul className="mb-6 list-disc list-inside px-5 sm:px-20">
                    <li>Ads-Free Website and Videos</li>
                    <li>Surprise Me Workout Selection Tool</li>
                    <li>Statistics for Your Activities</li>
                    <li>Enter and Track Custom Workouts</li>
                    <li>FB Plus Exclusive Workouts</li>
                    <li>Trackers to See Your Progress</li>
                    <li>FB Plus Content and Challenges</li>
                    <li>Video Tags</li>
                    <li>FB Plus Routines</li>
                    <li>Rest Day Complete</li>
                  </ul>
                  <a
                    href="#signup-premium"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
                  >
                    Go Premium
                  </a>
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-pink-600 shadow mt-28 py-6">
            <div className="container mx-auto text-center">
              <p className="text-white">
                &copy; 2024 WORKOUT Agency. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Temp3;
