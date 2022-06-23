import React from "react";
import ProjectOne from "../projects/ProjectOne";
import ProjectTwo from "../projects/ProjectTwo";
import ProjectThree from "../projects/ProjectThree";
import "./Portfolio.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Portfolio = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInDown">
      <section className="portfolio__container" id="portfolio">
        <h1 className="portfolio__title--small">Portfolio</h1>
        <ul className="portfolio__list--grid">
          <ProjectOne />
          <ProjectTwo />
          <ProjectThree />
        </ul>
      </section>
    </AnimationOnScroll>
  );
};

export default Portfolio;
