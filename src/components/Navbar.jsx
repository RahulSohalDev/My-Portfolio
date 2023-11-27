import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRaf = useRef();
  const showNavBar = () => {
    navRaf.current.classList.toggle("responsive-nav");
  };

  return (
    <>
      <header className="responsive-nav">
        <nav>
          <h3>sohal.dev</h3>
          <ul ref={navRaf}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
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
