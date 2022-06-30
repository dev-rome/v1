import React from "react";
import "./ProjectFive.css";

const ProjectFive = () => {
  return (
   <a
      href="https://wizardly-ritchie-7bf14e.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <li className="portfolio__item portfolio__item-five">
        <header>
          <div className="portfolio--top">
            <a
              href="https://github.com/dev-rome/NFT-Card-Component"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github portfolio__github"></i>
            </a>
            <a
              href="https://wizardly-ritchie-7bf14e.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-arrow-right-to-bracket portfolio__arrow"></i>
            </a>
          </div>
          <h3 className="portfolio__item--title">
            <a
              href="https://wizardly-ritchie-7bf14e.netlify.appp"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio__item--white"
            >
              NFT Card Component
            </a>
          </h3>
          <p className="portfolio__text">
            Frontend mentor NFT Card Component project.
          </p>
        </header>
        <footer>
          <ul className="portfolio__tech">
            <li className="portfolio__tech-item">HTML/CSS</li>
          </ul>
        </footer>
      </li>
    </a>
  );
};

export default ProjectFive;
