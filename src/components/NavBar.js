import React from "react";
import Logo from "../img/logo.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="nav__container nav__container--hide">
        <img className="nav__logo" src={Logo} alt="Jerome Haynes Logo" />
        <ul className="nav__menu">
          <li className="nav__item">
            <a className="nav__link nav__link--pink" href="#home">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link nav__link--pink" href="#about">
              About
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link nav__link--pink" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link nav__link-contact" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <nav className="nav__container-mobile nav__container-mobile--hide">
        <ul className="nav__menu-mobile">
          <li className="nav__item-mobile">
            <a className="nav__link-mobile" href="#home">
              <i class="fa-solid fa-house nav__icon-mobile"></i>
            </a>
          </li>
          <li className="nav__item-mobile">
            <a className="nav__link-mobile" href="#about">
              <i class="fa-solid fa-user nav__icon-mobile"></i>
            </a>
          </li>
          <li className="nav__item-mobile">
            <a className="nav__link-mobile" href="#portfolio">
              <i class="fa-solid fa-briefcase nav__icon-mobile"></i>
            </a>
          </li>
          <li className="nav__item-mobile">
            <a className="nav__link-mobile" href="#contact">
              <i class="fa-solid fa-message nav__icon-mobile"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
