import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../images/download.png";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const About = ["Our profile", "Contact Information"];

  return (
    <header className="bg-white shadow-2xl">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Cancer Logo" className="h-auto w-16" />
        </Link>
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                to="/"
                className="font-medium text-black-700 hover:text-red-600"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="font-medium text-black-700 hover:text-red-600"
                  aria-expanded={showDropdown}
                  aria-haspopup="true"
                >
                  About
                </button>
                {showDropdown && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md">
                    {About.map((link, index) => (
                      <li key={index}>
                        <Link
                          to=""
                          className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link
                to="/services"
                className="font-medium text-black-700 hover:text-red-600"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="font-medium text-black-700 hover:text-red-600"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
