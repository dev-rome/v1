import React from "react";
import "./ProjectTwo.css";

const ProjectTwo = () => {
  return (
    <li className="portfolio__item portfolio__item-two">
      <header>
        <div className="portfolio--top">
          <a
            href="https://github.com/dev-rome/dev-rome.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github portfolio__github"></i>
          </a>
          <a
            href="https://dev-rome.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-arrow-right-to-bracket portfolio__arrow"></i>
          </a>
        </div>
        <h3 className="portfolio__item--title">
          <a
            href="https://dev-rome.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__item--white"
          >
            Video Game Trivia
          </a>
        </h3>
        <p className="portfolio__text">
          Video game trivia is a game app for any player that wants to test
          their knowledge video games.
        </p>
      </header>
      <footer>
        <ul className="portfolio__tech">
          <li className="portfolio__tech-item">API</li>
          <li className="portfolio__tech-item">JavaScript</li>
          <li className="portfolio__tech-item">HTML/CSS</li>
        </ul>
      </footer>
    </li>
  );
};

export default ProjectTwo;
