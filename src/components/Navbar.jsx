import React from 'react'
import {  Link } from "react-router-dom";

function Navbar() {
  return (
   <>
   <nav>
    <h3>sohal.dev</h3>
    
        <ul>
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
        </ul>
      
   </nav>
   </>
  )
}

export default Navbar