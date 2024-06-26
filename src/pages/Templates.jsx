// src/pages/Templates.js

import React from "react";
import { Link } from "react-router-dom";
import pimg1 from "../images/preview1.png";
import pimg2 from "../images/preview2.png";
import pimg3 from "../images/preview3.png";
import pimg4 from "../images/preview4.png";
import pimg5 from "../images/preview5.png";
import pimg6 from "../images/preview6.png";
import pimg7 from "../images/preview7.png";
import pimg8 from "../images/preview8.png";

const Templates = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <div className="bg-white rounded-xl shadow-2xl flex flex-col max-w-6xl mx-auto border-gray-200 border-2 justify-center my-10 p-5">
          <h1 className="text-5xl text-center md:text-left md:ml-20 underline font-oswald text-gray-900  mb-5">
            Templates
          </h1>
          <p className="ml-10 font-source-sans text-xl text-gray-700">
            Welcome to the Templates page! This section showcases a variety of
            pre-designed templates built with React and styled using Tailwind
            CSS. These templates serve as a starting point for your projects,
            helping you quickly build beautiful and responsive UIs.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font font-oswald mb-8 rounded-3xl text-white font-semibold bg-red-500 py-5 pl-10 m-3">
            Landing Pages
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 m-5">
            {/*Temp1 */}
            <Link to="/template/Temp1" className="font-source-sans ">
              <div className="rounded-lg ">
                <div className=" bg-yellow-200 rounded-t-xl p-5">
                  <img
                    src={pimg1}
                    alt="Template 1"
                    className="w-full h-48 object-cover mb-4 rounded-xl transition hover:scale-105 shadow-2xl"
                  />
                </div>
                <h2 className="text-xl text-slate-900 ml-3 font-source-sans  font-semibold my-4 ">
                  Social Media Landing Page
                </h2>

                <p className="text-slate-700 ml-3 pb-4 mb-2">
                  A vibrant, responsive landing page to elevate your online
                  presence.
                </p>
              </div>
            </Link>

            {/*Temp2 */}
            <Link to="/template/Temp2" className="font-source-sans ">
              <div className="rounded-lg ">
                <div className=" bg-emerald-200 rounded-t-xl p-5">
                  <img
                    src={pimg2}
                    alt="Template 1"
                    className="w-full h-48 object-cover mb-4 rounded-xl transition hover:scale-105 shadow-2xl"
                  />
                </div>
                <h2 className="text-xl text-slate-900 ml-3 font-source-sans  font-semibold my-4 ">
                  E-Bike Startup Landing Page{" "}
                </h2>

                <p className="text-slate-700 ml-3 pb-4 mb-2">
                  E-Bike startup responsive landing page Innovative, stylish,
                  eco-friendly e-bikes.
                </p>
              </div>
            </Link>

            {/*Temp3 */}
            <Link to="/template/Temp3" className="font-source-sans ">
              <div className="rounded-lg ">
                <div className="bg-blue-200 rounded-t-xl p-5">
                  <img
                    src={pimg3}
                    alt="Template 1"
                    className="w-full h-48 object-cover mb-4 rounded-xl transition hover:scale-105 shadow-2xl"
                  />
                </div>
                <h2 className="text-xl text-slate-900 ml-3 font-source-sans  font-semibold my-4 ">
                  Get Fit, Stay Fit Landing Page{" "}
                </h2>

                <p className="text-slate-700 ml-3 pb-4 mb-2">
                  A dynamic, mobile-optimized landing page to strengthen your
                  online presence.
                </p>
              </div>
            </Link>
          </div>

          <h1 className="text-5xl font font-oswald mb-8 rounded-3xl text-white font-semibold bg-red-500 py-5 pl-10 m-3">
            E-Commerce Templates{" "}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 m-5">
            {/*Temp1 */}
            <Link to="/template/Temp4" className="font-source-sans ">
              <div className="rounded-lg ">
                <div className=" bg-yellow-200 rounded-t-xl p-5">
                  <img
                    src={pimg4}
                    alt="Template 1"
                    className="w-full h-48 object-cover mb-4 rounded-xl transition hover:scale-105 shadow-2xl"
                  />
                </div>
                <h2 className="text-xl text-slate-900 ml-3 font-source-sans  font-semibold my-4 ">
                  Home Page{" "}
                </h2>

                <p className="text-slate-700 ml-3 pb-4 mb-2">
                  The home page features a vibrant and stylish design with a
                  bold header, dynamic image sections showcasing different
                  clothing collections, a prominent "SALE" section, and a footer
                  with navigation and social media links.
                </p>
              </div>
            </Link>

            {/*Temp2 */}
            <Link to="/template/Temp5" className="font-source-sans ">
              <div className="rounded-lg ">
                <div className=" bg-emerald-200 rounded-t-xl p-5">
                  <img
                    src={pimg5}
                    alt="Template 1"
                    className="w-full h-48 object-cover mb-4 rounded-xl transition hover:scale-105 shadow-2xl"
                  />
                </div>
                <h2 className="text-xl text-slate-900 ml-3 font-source-sans  font-semibold my-4 ">
                  Products Page{" "}
                </h2>

                <p className="text-slate-700 ml-3 pb-4 mb-2">
                  The products page features a filters for category, price
                  range, sorting options, and brand selection, showcasing
                  various clothing items with images, descriptions, and purchase
                  options.
                </p>
              </div>
            </Link>

            {/*Temp3 */}
            <Link to="/template/Temp6" className="font-source-sans ">
              <div className="rounded-lg ">
                <div className="bg-blue-200 rounded-t-xl p-5">
                  <img
                    src={pimg6}
                    alt="Template 1"
                    className="w-full h-48 object-cover mb-4 rounded-xl transition hover:scale-105 shadow-2xl"
                  />
                </div>
                <h2 className="text-xl text-slate-900 ml-3 font-source-sans  font-semibold my-4 ">
                  Product Details Page{" "}
                </h2>

                <p className="text-slate-700 ml-3 pb-4 mb-2">
                  The product details page features a breadcrumb navigation,
                  main product image with additional thumbnails, product
                  description and reviews, options to choose colors, price and
                  similar products
                </p>
              </div>
            </Link>

            {/*Temp4 */}
            <Link to="/template/Temp7" className="font-source-sans ">
              <div className="rounded-lg ">
                <div className="bg-purple-200 rounded-t-xl p-5">
                  <img
                    src={pimg7}
                    alt="Template 1"
                    className="w-full h-48 object-cover mb-4 rounded-xl transition hover:scale-105 shadow-2xl"
                  />
                </div>
                <h2 className="text-xl text-slate-900 ml-3 font-source-sans  font-semibold my-4 ">
                  Cart Page{" "}
                </h2>

                <p className="text-slate-700 ml-3 pb-4 mb-2">
                  The cart page features a detailed layout with item images,
                  descriptions, quantity controls, price details, subtotal,
                  total, and a checkout button, along with a section for
                  additional product recommendations and a footer with
                  navigation links.
                </p>
              </div>
            </Link>

            {/*Temp5 */}
            <Link to="/template/Temp8" className="font-source-sans ">
              <div className="rounded-lg ">
                <div className=" bg-lime-300 rounded-t-xl p-5">
                  <img
                    src={pimg8}
                    alt="Template 1"
                    className="w-full h-48 object-cover mb-4 rounded-xl transition hover:scale-105 shadow-2xl"
                  />
                </div>
                <h2 className="text-xl text-slate-900 ml-3 font-source-sans  font-semibold my-4 ">
                  Login Page{" "}
                </h2>

                <p className="text-slate-700 ml-3 pb-4 mb-2">
                  The login page features a clean, centered layout with a
                  prominent login form and an option to sign in with Google
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
