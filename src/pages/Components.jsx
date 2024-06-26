import React from "react";
import { Link } from "react-router-dom";
import buttonsImg from "../assets/c/cursor-hover.svg";
import buttonsImg2 from "../assets/c/person.svg";
import buttonsImg3 from "../assets/c/filter.svg";
import buttonsImg4 from "../assets/c/main-component.svg";
import buttonsImg5 from "../assets/c/star.svg";
import buttonsImg6 from "../assets/c/cart.svg";
import buttonsImg7 from "../assets/c/question-answer.svg";
import buttonsImg8 from "../assets/c/person.svg";
import buttonsImg9 from "../assets/c/error-circle.svg";

const Components = () => {
  const componentsList = [
    {
      name: "Avatars",
      path: "/avatars",
      image: buttonsImg2,
      description: "User profile images and icons for representation.",
    },
    {
      name: "Buttons",
      path: "/buttons",
      image: buttonsImg,
      description:
        "Various button styles and animations for user interactions.",
    },
    {
      name: "Card",
      path: "/cards",
      image: buttonsImg9,
      description: "Flexible card layouts for displaying content.",
    },
    {
      name: "Filters",
      path: "/filter",
      image: buttonsImg3,
      description: "Components to filter and sort data efficiently.",
    },
    {
      name: "Hero",
      path: "/hero",
      image: buttonsImg4,
      description: "Prominent hero sections for landing pages.",
    },
    {
      name: "Reviews",
      path: "/reviews",
      image: buttonsImg5,
      description: "Components to showcase customer reviews.",
    },
    {
      name: "Cart",
      path: "/cart",
      image: buttonsImg6,
      description: "Shopping cart interfaces for e-commerce applications.",
    },
    {
      name: "Testimonials",
      path: "/testimonials",
      image: buttonsImg7,
      description: "Displays user testimonials and feedback.",
    },
    {
      name: "Erorr404",
      path: "/erorr404",
      image: buttonsImg8,
      description: "Custom 404 error pages for not found routes.",
    },
  ];

  return (
    <div className=" mx-auto">
      <div className="bg-white rounded-xl shadow-2xl flex flex-col max-w-6xl mx-auto border-gray-200 border-2 justify-center my-10 p-5">
        <h1 className="text-5xl md:ml-20 text-center md:text-left  underline  font-oswald text-gray-900 my-4 mb-5">
          Components Page
        </h1>
        <p className=" ml-10 font-source-sans text-xl text-gray-700">
          Welcome to the Components page! This section provides a collection of
          reusable UI components built with React and styled using Tailwind CSS.
          Each component includes a code block demonstrating how to integrate it
          into your project, ensuring a seamless development experience.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="p-5 max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {componentsList.map((component, index) => (
            <Link to={component.path} key={index}>
              <div className="relative p-4 bg-white border-2 shadow-md h-64 w-full rounded-2xl border-black transition transform hover:-translate-y-2 hover:-translate-x-2 hover:border-r-8 hover:border-b-8">
                <h2 className="text-center text-3xl font-bold font-oswald text-gray-800">
                  {component.name}
                </h2>
                <img
                  src={component.image}
                  alt={component.name}
                  className="h-24 w-24 object-cover rounded-t-2xl mx-auto my-4"
                />
                <div className="p-2">
                  <p className="text-lg font-source-sans text-gray-600">
                    {component.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Components;
