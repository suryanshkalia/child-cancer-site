import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <div>
        <header className="bg-gray-900 p-4 text-white flex justify-between ">
          <div>logo</div>
          <div>
            <ul className="flex justify-between gap-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="services">Services</Link>
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
