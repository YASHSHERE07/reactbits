import React from "react";
import { Link } from "react-router-dom";

const Documentation = () => {
  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-oswald text-gray-900 mb-8">
          Documentation
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-oswald text-gray-800 mb-4">
            Introduction
          </h2>
          <p className="text-base font-source-sans text-gray-600">
            Welcome to the documentation page. Here you will find all the
            information needed to use and understand our project.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-oswald text-gray-800 mb-4">
            Getting Started
          </h2>
          <p className="text-base font-source-sans text-gray-600 mb-4">
            Follow these steps to get started with your project:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-base font-source-sans text-gray-600">
            <li>Setup Tailwind CSS.</li>
            <li>
              Find something that you like from the{" "}
              <Link to="/components" className="font-bold underline">
                components{" "}
              </Link>{" "}
              or
              <Link to="/Templates" className="font-bold underline ml-1">
                templates{" "}
              </Link>{" "}
            </li>
            <li>Click the Code button</li>
            <li>Copy-paste into your project. All Set!!!</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-oswald text-gray-800 mb-4">
            Install Tailwind CSS
          </h2>
          <p className="text-base font-source-sans text-gray-600 pb-5">
            The recommended way to use Tailwind CSS in a project is to install
            it and it's peer-dependencies via npm.
          </p>
          <div className="bg-gray-900 text-white px-3 py-3 rounded-xl max-w-lg ">
            <code>npm install tailwindcss postcss autoprefixer -D</code>
          </div>
          <p className="text-base font-source-sans text-gray-600 py-5">
            The official installation instructions are really good and they have
            integration guides for some of the most popular frameworks as well.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-oswald text-gray-800 mb-4">Support</h2>
          <p className="text-base font-source-sans text-gray-600">
            If you need any support, feel free to reach out to our team via
            email or our support forum.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Documentation;
