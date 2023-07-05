import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "./../../images/download.png"

const Header = () => {

  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const About = [
    "Our profile",
    "Contact Information"
  ];
  

  return (
    <React.Fragment>
      <div>
        <header className="bg-gray-900 p-4 text-white flex justify-between ">
          <div>
            <Link to="">
            <img src={logo} alt="cancerLogo" className="h-auto w-16" ></img>
            </Link>
          </div>
          <div>
            <ul className="flex justify-between gap-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <div>
                  <button onClick={toggleDropdown} className="cursor-pointer focus:outline-none">
                    About
                  </button>
                  {showDropdown && (
                    <ul className="absolute text-black px-4 bg-white rounded-lg shadow-md">
                      {About.map((links, index) => (
                        <li className="my-2">
                          <Link to="">{links}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <Link to="services" >Services</Link>
              </li>
              <li>
                <Link to="contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </React.Fragment>
  );
};

export default Header;
