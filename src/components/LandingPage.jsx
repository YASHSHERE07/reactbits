import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?fitness')",
        }}
      >
        <h1 className="text-5xl font-bold mb-4">Transform Your Body</h1>
        <p className="text-lg mb-8">Join our online fitness coaching today!</p>
        <a
          href="#services"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Personal Training</h3>
                <p>Get one-on-one coaching tailored to your goals.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Nutrition Plans</h3>
                <p>Customized meal plans to fuel your fitness journey.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Group Classes</h3>
                <p>Join our community and participate in group workouts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="mb-4">
                  "I've never felt better! The personalized coaching has helped
                  me reach my fitness goals faster than I ever thought
                  possible."
                </p>
                <h4 className="font-bold">- Jane Doe</h4>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="mb-4">
                  "The nutrition plans are fantastic. I feel more energized and
                  healthier overall."
                </p>
                <h4 className="font-bold">- John Smith</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-lg mb-8">
            Sign up for our online fitness coaching and start your journey
            today!
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-500 font-bold py-2 px-4 rounded"
          >
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold">EJOLY Fitness</h1>
          <p className="text-sm">Leading the way in online fitness coaching.</p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            &copy; 2024 EJOLY Fitness. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
