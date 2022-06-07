import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact__container">
      <h1 className="contact__title--small">Contact</h1>
      <h2 className="contact__title--big">Get In Touch</h2>
      <p className="contact__text">
        Currently available for hire, my inbox is always open. Also avaiable for
        freelance work.
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
          <i class="fa-solid fa-link contact__btn-icon"></i>
          Website
        </a>
      </div>
    </section>
  );
};

export default Contact;
