import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">&copy; Jerome Haynes 2022</p>
      <div className="footer__social">
        <a
          className="footer__social-link"
          href="https://www.linkedin.com/in/jerome-haynes-b9a8b9a4/"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          className="footer__social-link"
          href="https://github.com/dev-rome"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
