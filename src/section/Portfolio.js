import React, { useState, useEffect } from "react";
import PortfolioList from "../components/PortfolioList";
import { Featured, Frontend, GeneralAssembly } from "../components/PortfolioData";
import "./Portfolio.css"

const Portfolio = () => {
  const [activeTitle, setActiveTitle] = useState("featured");
  const [portfolioData, setPortfolioData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "frontend",
      title: "Frontend Mentor",
    },
    {
      id: "general assembly",
      title: "General Assembly",
    },
  ];

  useEffect(() => {
    if (activeTitle === "featured") {
      setPortfolioData(Featured);
    } else if (activeTitle === "frontend") {
      setPortfolioData(Frontend);
    } else if (activeTitle === "general assembly") {
      setPortfolioData(GeneralAssembly);
    } else {
      setPortfolioData(Featured);
    }
  }, [activeTitle]);

  return (
    <section className="portfolio__container animate__animated animate__fadeInLeft">
      <h1 className="portfolio__title">Portfolio</h1>
      <ul className="portfolio__list">
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            id={item.id}
            title={item.title}
            active={activeTitle === item.id}
            setActiveTitle={setActiveTitle}
          />
        ))}
      </ul>
      <div className="portfolio__grid">
        {portfolioData.map((item) => (
          <div key={item.id} className="portfolio__grid-item">
            <img
              className="portfolio__grid-image"
              src={item.img}
              alt={item.title}
            />
            <h2 className="portfolio__grid-item-title">{item.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;