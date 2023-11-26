import React from "react";
import Linkdin from "../assets/social/linkedin.png";
import Github from "../assets/social/github.png";

function Footer() {
  return (
    <footer>
      <div className="left">Copyright © 2023. All rights are reserved</div>
      <div className="right">
        <a href="https://github.com/RahulSohalDev" target="_blank">
          <img src={Linkdin} alt="Linkdin" />
        </a>

        <a href="https://github.com/RahulSohalDev" target="_blank">
          <img src={Github} alt="Github" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
