import React from "react";
import Logo from "../img/logo.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <img className="nav__logo" src={Logo} alt="Jerome Haynes Logo" />
      <ul className="nav__menu">
        <li className="nav__item">
          <a className="nav__link" href="/home">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/about">
            About
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/work">
            Work
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
