import React from 'react'

const ProjectFour = () => {
    return (
        <li className="portfolio__item">
        <header>
          <div className="portfolio--top">
            <a
              href="https://github.com/dev-rome/QR-Code-Comonent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github portfolio__github"></i>
            </a>
            <a
              href="https://cosmic-cheesecake-21c240.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-arrow-right-to-bracket portfolio__arrow"></i>
            </a>
          </div>
          <h3 className="portfolio__item--title">
            <a
              href="https://cosmic-cheesecake-21c240.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio__item--white"
            >
              QR Code Component
            </a>
          </h3>
          <p className="portfolio__text">
            Frontend mentor QR Code Component project.
          </p>
        </header>
        <footer>
          <ul className="portfolio__tech">
            <li className="portfolio__tech-item">HTML/CSS</li>
          </ul>
        </footer>
      </li>
    )
}

export default ProjectFour;