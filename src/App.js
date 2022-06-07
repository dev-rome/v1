import React from "react";
import NavBar from "./components/NavBar";
import IntroSection from "./section/Hero";
import About from "./section/About";
import Portfolio from "./section/Portfolio";
import Contact from "./section/Contact";
import Footer from "./components/Footer";
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
