import React from "react";
import Linkdin from "../assets/social/linkedin.png";
// import Github from "../assets/social/github.png";
import Github1 from "../assets/social/github (1).png";
// import Img2 from "../assets/hero-img/IMG_6766.jpg"
import Img2 from "../assets/hero-img/IMG_3123.jpg";
import Hii from "../assets/hero-img/waving-hand.png";

// skills-images
import Html from "../assets/skills/html-5.png";
import Bootstrap from "../assets/skills/bootstrap.png";
import Css from "../assets/skills/css-3.png";
import Atom from "../assets/skills/atom.png";
import Js from "../assets/skills/js.png";
import Sass from "../assets/skills/sass.png";

function Hero() {
  return (
    <div className="container">
      <div className="content">
        <div className="hero-main">
          <div className="hero-text">
            <h1>
              Front-End React Developer
              <img src={Hii} alt="Hii Img" />
            </h1>
            <p>
              Hi, I'm Rahul sohal. A passionate Front-end React Developer based
              in Rajpura, Punjab. 📍
            </p>
            <a href="https://github.com/RahulSohalDev">
              <img src={Linkdin} alt="Linkdin" />
            </a>

            <a href="https://github.com/RahulSohalDev">
              <img src={Github1} alt="Github" />
            </a>
          </div>
          <div className="hero-img">
            <img src={Img2} alt="Hero Img" />
          </div>
        </div>
      </div>

      <div className="skills">
        <h3>Tech Stack <span className="f">|</span></h3>
        <div className="skills-img">
          <img src={Html} alt="" />
          <img src={Bootstrap} alt="" />
          <img src={Js} alt="" />
          <img src={Atom} alt="" />
          <img src={Css} alt="" />
          <img src={Sass} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
