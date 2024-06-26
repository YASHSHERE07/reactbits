import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-900 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/components" className="hover:underline">
                Components
              </Link>
              <Link to="/templates" className="hover:underline">
                Templates
              </Link>
              <Link to="/documentation" className="hover:underline">
                Documentation
              </Link>
            </nav>
          </div>
          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>
              Email:{" "}
              <a href="mailto:info@reactbits.com" className="hover:underline">
                info@reactbits.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:underline">
                +123 456 7890
              </a>
            </p>
          </div>
          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.412c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.1 2.795.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.313h3.586l-.467 3.622h-3.119V24h6.116c.727 0 1.327-.6 1.327-1.326V1.326C24 .6 23.4 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.932 9.932 0 0 1-2.828.775A4.934 4.934 0 0 0 23.338 3c-.944.56-1.987.97-3.1 1.192a4.92 4.92 0 0 0-8.384 4.482A13.94 13.94 0 0 1 1.671 3.149a4.92 4.92 0 0 0 1.523 6.573A4.897 4.897 0 0 1 .964 9.11v.062a4.921 4.921 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.212.084 4.925 4.925 0 0 0 4.602 3.417A9.868 9.868 0 0 1 0 19.539a13.919 13.919 0 0 0 7.548 2.209c9.142 0 14.307-7.721 14.307-14.426 0-.219-.004-.438-.015-.654A10.243 10.243 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3C3.33 3 2 4.3 2 5.9c0 1.6 1.3 2.9 3 2.9s3-1.3 3-2.9c0-1.6-1.3-2.9-3-2.9zm.02 4.5H2.01v12h2.99V7.5zm7.98 0H8.99v12H11.98v-5.7c0-1.4.03-3.3 2-3.3 2 0 2 1.6 2 3.2v5.8H19.97v-6.5c0-3.2-1.7-4.7-4.1-4.7-1.9 0-2.8 1-3.3 1.6v-1.3H12V7.5zm-11 11.99V7.5H1v11.99H1zm9.99-5.5c-1.6 0-3 .1-4.3.6-.2.1-.5.2-.5.5v.9c0 .4.3.8.8.8 2.3.2 5.8 2.3 7.4 2.7.4.1.8-.3.8-.7V18c-.1-.2-.3-.4-.5-.5-1.3-.4-2.7-.7-4-.7-.1 0-.3 0-.4-.1V7.5H9.99v11.99H11zm0-5.5c-.5 0-.8-.3-.8-.8 0-.5.3-.8.8-.8s.8.3.8.8c0 .5-.3.8-.8.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          &copy; {new Date().getFullYear()} ReactBits. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
