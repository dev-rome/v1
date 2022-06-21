import React from "react";
import AboutList from "./AboutList";
import "./About.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Logo from "../img/logo.svg";

const About = () => {
  const tech = [
    {
      id: 1,
      tech: "HTML",
    },
    {
      id: 2,
      tech: "CSS",
    },
    {
      id: 3,
      tech: "JavaScript",
    },
    {
      id: 4,
      tech: "React",
    },
    {
      id: 5,
      tech: "Node",
    },
    {
      id: 6,
      tech: "Express",
    },
    {
      id: 7,
      tech: "MongoDB",
    },
    {
      id: 8,
      tech: "MySQL",
    },
    {
      id: 9,
      tech: "PostgreSQL",
    },
    {
      id: 10,
      tech: "BootStrap",
    },
    {
      id: 11,
      tech: "Python",
    },
    {
      id: 12,
      tech: "Django",
    },
    {
      id: 13,
      tech: "GitHub",
    },
    {
      id: 14,
      tech: "Heroku",
    },
    {
      id: 15,
      tech: "Postman",
    },
    {
      id: 16,
      tech: "Figma",
    },
  ];

  return (
    <AnimationOnScroll animateIn="animate__fadeInDown">
      <section className="about__container" id="about">
        <h1 className="about__title">About Me</h1>
        <div className="about__content">
          <div className="about__left">
            <p className="about__text">
              Hello! my name is Jerome, a software engineer in New York. My
              passion for web development sparked in 2018 when I completed my
              first course with Codecademy Programming with Python. Completing
              that course sparked a passion for learning and growth. I also
              finished Udacity course Intro to Programming Nanodegree, three
              Udemy courses such as The Web Developer Bootcamp, Build Responsive
              Real-World Websites with HTML and CSS, and Modern React with
              Redux. In the future, I see myself as a full-stack engineer
              supporting clients and building products that will give back to
              communities.
            </p>

            <p className="about__text">
              Currently, I am enrolled in the General Assembly as a part-time
              software engineer immersive, expanding my learning and best
              practices. When I am not in class or freelancing, you can find me
              on twitch playing games such as Valorant, League of Legends, or
              Lost Ark. Also a fan of basketball, reading, and working out.
            </p>

            <div className="about__tech">
              <h2 className="about__tech-title">Tech</h2>
              <ul className="about__tech-list">
                {tech.map((item) => {
                  return <AboutList id={item.id} tech={item.tech} />;
                })}
              </ul>
            </div>
          </div>
          <div className="about__right">
            <img src={Logo} alt="jerome" className="about__image" />
          </div>
        </div>
      </section>
    </AnimationOnScroll>
  );
};

export default About;
