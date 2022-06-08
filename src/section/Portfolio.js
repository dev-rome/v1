import React from "react";
import "./Portfolio.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Portfolio = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInDown">
      <section className="portfolio__container">
        <h1 className="portfolio__title--small">Portfolio</h1>
        <ul className="portfolio__list--grid">
          <li className="portfolio__item">
            <header>
              <div className="portfolio--top">
                <a
                  href="https://eliteeyewebdesign.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-solid fa-arrow-right-to-bracket portfolio__arrow"></i>
                </a>
              </div>
              <h3 className="portfolio__item--title">
                <a
                  href="https://eliteeyewebdesign.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio__item--white"
                >
                  Elite Eye Web Design
                </a>
              </h3>
              <p className="portfolio__text">
                Web design company that specializes in creating beautiful,
                functional websites for small to large businesses.
              </p>
            </header>
            <footer>
              <ul className="portfolio__tech">
                <li className="portfolio__tech-item">WordPress</li>
                <li className="portfolio__tech-item">JavaScript</li>
                <li className="portfolio__tech-item">HTML/CSS</li>
              </ul>
            </footer>
          </li>

          <li className="portfolio__item">
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
                  <i class="fa-solid fa-arrow-right-to-bracket portfolio__arrow"></i>
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
                Video game trivia is a game app for any player that wants to
                test their knowledge video games.
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

          <li className="portfolio__item">
            <header>
              <div className="portfolio--top">
                <a
                  href="https://github.com/dev-rome"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github portfolio__github"></i>
                </a>
                <a
                  href="https://github.com/dev-rome"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-solid fa-arrow-right-to-bracket portfolio__arrow"></i>
                </a>
              </div>
              <h3 className="portfolio__item--title">
                <a
                  href="https://eliteeyewebdesign.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio__item--white"
                >
                  Tenant-Estate
                </a>
              </h3>
              <p className="portfolio__text">
                Tenant-Estate is a home/apartment listing app that allows user
                to rent or sell their property.
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
        </ul>
      </section>
    </AnimationOnScroll>
  );
};

export default Portfolio;
