import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Hero.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const HeroSection = () => {
  const typedRef = useRef();

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Front-End", "Full-Stack", "Freelance"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <AnimationOnScroll animateIn="animate__fadeInDown">
      <section className="hero__container" id="home">
        <h1 className="hero__title--small">Hi, my name is</h1>
        <h2 className="hero__title--big">Jerome Haynes</h2>
        <h2 className="hero__title--big">
          I'm a <span ref={typedRef}></span>Developer
        </h2>
        <p className="hero__text">
          A Software Engineer who can build a web presence from the ground up
          using current best practices. Passionate learner, hard worker, and
          team player who is proficient in an array of scripting languages and
          multimedia web tools.
        </p>
        <div className="hero__btn">
          <a
            href="https://www.linkedin.com/in/jerome-haynes/"
            className="hero__btn-social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin hero__btn-icon"></i>
            LinkedIn
          </a>
          <a
            href="https://github.com/dev-rome"
            className="hero__btn-social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github hero__btn-icon"></i>
            Github
          </a>
        </div>
      </section>
    </AnimationOnScroll>
  );
};

export default HeroSection;
