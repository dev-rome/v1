import React from "react";

const AboutList = ({ tech }) => {
  return (
    <li className="about__tech-item">
      <i className="fa-solid fa-angle-right"></i>
      {tech}
    </li>
  );
};

export default AboutList;