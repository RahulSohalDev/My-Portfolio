import React from "react";
import Laptop from "../assets/about/pexels-rodrigo-santos-3888151.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-img">
        <img src={Laptop} alt="Laptop img" />
      </div>
      <div className="about-text">
        <h3>ABOUT ME</h3>
        <h2>A dedicated Front-end Developer based in Rajpura, Punjab 📍</h2>
        <p>
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </div>
  );
}

export default About;
