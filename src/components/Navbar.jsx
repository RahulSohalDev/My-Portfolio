import React from 'react'
import {  Link } from "react-router-dom";

function Navbar() {
  return (
   <>
   <nav>
    <h3>sohal.dev</h3>
    
        <ul>
          <li>
            <Link to="/hero">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      
   </nav>
   </>
  )
}

export default Navbar