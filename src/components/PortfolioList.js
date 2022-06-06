import React from "react";
import "./PortfolioList.css";

const PortfolioList = ({ title, active, setActiveTitle, id }) => {
  return (
    <li
      className={
        active ? "portfolio__item portfolio__item-active" : "portfolio__item"
      }
      onClick={() => setActiveTitle(id)}
    >
      {title}
    </li>
  );
};

export default PortfolioList;