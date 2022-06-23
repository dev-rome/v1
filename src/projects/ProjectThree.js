import React from "react";

const ProjectThree = () => {
  return (
    <li className="portfolio__item">
      <header>
        <div className="portfolio--top">
          <a
            href="https://github.com/dev-rome/Advice-generator-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github portfolio__github"></i>
          </a>
          <a
            href="https://playful-dasik-ca8d3c.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-arrow-right-to-bracket portfolio__arrow"></i>
          </a>
        </div>
        <h3 className="portfolio__item--title">
          <a
            href="https://playful-dasik-ca8d3c.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__item--white"
          >
            Advice Generator
          </a>
        </h3>
        <p className="portfolio__text">
          Advice Generator app that generates random advice to user when button
          is clicked using advice slip api.
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

export default ProjectThree;
