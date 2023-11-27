import React from "react";
import Game from "../assets/projects-img/bg1keixvsprk6ev1q8f2.jpg";
import CountryImg from "../assets/projects-img/jfrcfmcisi1xiwm4rl1s.jpg";
import Code from "../assets/social/github (1).png";
import Live from "../assets/social/icons8-link-24.png";

function Projects() {
  return (
    <div className="project-container">
      <div className="projects">
        <div className="project">
          <h3 className="port">PORTFOLIO</h3>
          <p>Each project is a unique piece of development 🧩</p>
        </div>
        <div className="game">
          <div className="game-img">
            <img src={Game} alt="" />
          </div>
          <div className="game-text">
            <h3>Rock-Paper-Cessore(JANUARY 2023)</h3>
            <p>
              Play Rock, Paper, Scissors against the computer.If the player
              wins, they gain 1 point. If the computer wins, the player loses
              one point.
            </p>
            <div className="rap">
              <div className="rules">
                <h3>Rules :-</h3>
                <p> Paper beats Rock</p>
                <p>Rock beats Scissors</p>
                <p>Scissors beats Paper</p>
              </div>
              <hr />
              <div className="game-link live">
                <a
                  target="_blank"
                  href="https://github.com/RahulSohalDev/Rock-Paper-Scissor"
                >
                  <p>
                    Code{" "}
                    <span>
                      <img src={Code} alt="Github code" />
                    </span>
                  </p>
                </a>
                <a
                  target="_blank"
                  href="https://rahulsohaldev.github.io/Rock-Paper-Scissor/"
                >
                  <p>
                    Live Demo{" "}
                    <span>
                      <img src={Live} alt="Github code" />
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* country */}
        <div className="country">
          <div className="country-img">
            <img src={CountryImg} alt="" />
          </div>
          <div className="country-text">
            <h3>Rest-Countries-API (JANUARY 2023)</h3>
            <p>
              Build Countries App that render each country loaded from third
              party API. Rest Countries API with color theme switcher
            </p>
            <div className="country-tech">
              <p>Tech Stack-</p>
              <div className="btns-use">
                <button>HTML5</button>
                <button>CSS3</button>
                <button>JAVASCRIPT</button>
                <button>API</button>
              </div>
            </div>
            <div className="live">
              <a
                target="_blank"
                href="https://github.com/RahulSohalDev/Rest-Countries-API/"
              >
                <p>
                  Code{" "}
                  <span>
                    <img src={Code} alt="Github code" />
                  </span>
                </p>
              </a>
              <a
                href="https://rahulsohaldev.github.io/Rest-Countries-API"
                target="_blank"
              >
                <p>
                  Live Demo{" "}
                  <span>
                    <img src={Live} alt="Live demo" />
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
