import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../images/download.jpg"


const Header = () => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };

  const [showContactDropdown, setShowContactDropdown] = useState(false);

  const toggleContactDropdown = () => {
    setShowContactDropdown(!showContactDropdown);
  };

  const About = [
    {
      title: "What is cancer",
      to: "/cancer",
    },
    {
      title: "Child Cancer Awareness",
      to: "/childawareness",
    },
  ];

  const Contact = [
    {
      title: "Phone-Number - 1234567890",
    },
    {
      title: "Email - abcd@gmail.com",
    },
  ];

  return (
    <header className="bg-white shadow-2xl">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link to={"/"}>
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
                  onClick={toggleAboutDropdown}
                  className="font-medium text-black-700 hover:text-red-600"
                  aria-expanded={showAboutDropdown}
                  aria-haspopup="true"
                >
                  About
                </button>
                {showAboutDropdown && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md">
                    {About.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.to}
                          className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                        >
                          {link.title}
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
              <button
                onClick={toggleContactDropdown}
                className="font-bold "
                aria-expanded={showAboutDropdown}
                aria-haspopup="true"
              >
                Contact
              </button>
              {showContactDropdown && (
                <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md">
                  {Contact.map((item, index) => (
                    <li className="block py-2 px-4 text-gray-700 hover:bg-gray-100" key={index}>{item.title}</li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
