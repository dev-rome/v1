import React from "react";
import "./About.css";
import Logo from "../img/logo.svg";

const About = () => {
  return (
    <section className="about__container animate__animated animate__fadeIn">
      <h1 className="about__title">About Me</h1>
      <div className="about__content">
        <div className="about__left">
          <p className="about__text">
            Hello! my name is Jerome, a software engineer located in New York.
            My passion for web development sparked in 2018 when I completed my
            first course with Codecademy Programming with Python. Completing
            that course sparked a passion for learning and growth. I also
            finished Udacity course Intro to Programming Nanodegree, three Udemy
            courses such as The Web Developer Bootcamp, Build Responsive
            Real-World Websites with HTML and CSS, and Modern React with Redux.
          </p>

          <p className="about__text">
            Currently, I am enrolled in the General Assembly as a part-time
            software engineer immersive, expanding my learning and best
            practices. When I am not in class or freelancing, you can find me on
            twitch playing games such as Valorant, League of Legends, or Lost
            Ark. Also a fan of basketball, reading, and working out.
          </p>

          <div className="about__tech">
            <h2 className="about__tech-title">Tech</h2>
            <ul className="about__tech-list">
              <li className="about__tech-item">
                <i className="fa-solid fa-angle-right"></i>
                React
              </li>
              <li className="about__tech-item">
                <i className="fa-solid fa-angle-right"></i>
                Python
              </li>
              <li className="about__tech-item">
                <i className="fa-solid fa-angle-right"></i>
                Node
              </li>
              <li className="about__tech-item">
                <i className="fa-solid fa-angle-right"></i>
                Express
              </li>
              <li className="about__tech-item">
                <i className="fa-solid fa-angle-right"></i>
                MongoDB
              </li>
              <li className="about__tech-item">
                <i className="fa-solid fa-angle-right"></i>
                HTML
              </li>
              <li className="about__tech-item">
                <i className="fa-solid fa-angle-right"></i>
                CSS
              </li>
              <li className="about__tech-item">
                <i className="fa-solid fa-angle-right"></i>
                JavaScript
              </li>
              <li className="about__tech-item">
                <i className="fa-solid fa-angle-right"></i>
                WordPress
              </li>
            </ul>
          </div>
        </div>
        <div className="about__right">
          <img src={Logo} alt="jerome" className="about__image" />
        </div>
      </div>
    </section>
  );
};

export default About;
