import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              Company <div className="log">logo</div>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a
                  href="#section1"
                  className="nav-links active"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#section2"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Our Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#section3"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#section4"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#section5"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
