import React from "react";
import { Link } from "react-router-dom";

import topLogo from "./../../images/4196777.png";
import cancerLogo from "./../../images/download.png";

const Links = ({ links, src }) => {
  return (
    <div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={src[index]}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const links = ["Home", "donate", "volunteer"];

  const src = ["/home", "suryanshKalia", "kaliaSuryansh"];
  return (
    <footer className="bg-gray-900  text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="md:w-1/3">
            <Link to="/">
              <img
                src={cancerLogo}
                alt="cancer-logo"
                className="h-auto w-20 mt-4"
              ></img>
            </Link>
          </div>
          <div className="md:w-1/3">
            <h2 className="font-bold mb-4">Quick Links</h2>
            <Links links={links} src={src}></Links>
          </div>
          <div className="md:w-1/3">
            <h2 className="font-bold mb-4">Contact us</h2>
            <p className="text-gray-400">Chintpurni, HimachalPradesh</p>
            <p className="text-gray-400">Email: saranshkalia95@gmail.com</p>
            <p className="text-gray-400">Phone: 1234567890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Child Cancer Support. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
