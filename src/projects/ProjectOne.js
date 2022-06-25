import React from "react";
import "./ProjectOne.css";

const ProjectOne = () => {
  return (
    <li className="portfolio__item portfolio__item-one">
      <header>
        <div className="portfolio--top">
          <a
            href="https://github.com/dev-rome/Tenant-Estate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github portfolio__github"></i>
          </a>
          <a
            href="https://enigmatic-anchorage-66839.herokuapp.com/buy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-arrow-right-to-bracket portfolio__arrow"></i>
          </a>
        </div>
        <h3 className="portfolio__item--title">
          <a
            href="https://enigmatic-anchorage-66839.herokuapp.com/buy"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__item--white"
          >
            Tenant-Estate
          </a>
        </h3>
        <p className="portfolio__text">
          Tenant-Estate is a home/apartment listing app that allows user to rent
          or sell their property.
        </p>
      </header>
      <footer>
        <ul className="portfolio__tech">
          <li className="portfolio__tech-item">EJS</li>
          <li className="portfolio__tech-item">JavaScript</li>
          <li className="portfolio__tech-item">HTML/CSS</li>
          <li className="portfolio__tech-item">BootStrap</li>
        </ul>
      </footer>
    </li>
  );
};

export default ProjectOne;
