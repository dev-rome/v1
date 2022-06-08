import React from "react";
import "./Contact.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contact = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInDown">
      <section className="contact__container" id="contact">
        <h1 className="contact__title--small">Contact</h1>
        <h2 className="contact__title--big">Get In Touch</h2>
        <p className="contact__text">
          Currently available for hire, my inbox is always open. Also avaiable
          for freelance work.
        </p>
        <div className="contact__btn-container">
          <a
            className="contact__btn"
            href="mailto:haynesjerome@gmail.com"
            rel="noreferrer"
          >
            <i className="fa-solid fa-envelope contact__btn-icon"></i>
            Contact
          </a>
          <a
            className="contact__btn"
            href="https://eliteeyewebdesign.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-link contact__btn-icon"></i>
            Website
          </a>
        </div>
      </section>
    </AnimationOnScroll>
  );
};

export default Contact;
