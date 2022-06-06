import React from "react";
import NavBar from "./components/NavBar";
import IntroSection from "./section/Hero";
import About from "./section/About";
import Portfolio from "./section/Portfolio";
import Contact from "./section/Contact";
import "./App.css";
import "animate.css"

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <IntroSection />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
