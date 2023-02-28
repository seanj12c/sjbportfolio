import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Portfolio/>
    <Contact/>
  </div>
  );
}

export default App;
