import React, { useRef } from "react";
// import { Link } from "react-router-dom";
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRaf = useRef();
  const showNavBar = () => {
    navRaf.current.classList.toggle("responsive-nav");
  };

  return (
    <>
      <header className="responsive-nav" id="nav">
        <nav>
          <h3>sohal.dev</h3>
          <ul ref={navRaf}>
            <li>
              <Link to="hero" spy={true} smooth={true} offset={-100} duration={1000}>Home</Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={-100} duration={1000}>About</Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true} offset={-100} duration={1000}>Projects</Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={1000}>Contact</Link>
            </li>
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <FaTimes />
            </button>
          </ul>
          <button className="nav-btn" onClick={showNavBar}>
            <FaBars />
          </button>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
