import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import "./App.css"; // Import CSS file for cursor styling

function AppRoutes() {
  const location = useLocation();
  const navbarHiddenRoutes = ["/"];

  const isNavbarHidden = navbarHiddenRoutes.includes(location.pathname);

  return (
    <div>
      {!isNavbarHidden && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {
  const [cursorX, setCursorX] = useState(-100); // Initial cursor position
  const [cursorY, setCursorY] = useState(-100); // Initial cursor position

  // Update cursor position on mouse move
  const handleMouseMove = (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  };

  // Reset cursor position when mouse leaves the window
  const handleMouseOut = () => {
    setCursorX(-100);
    setCursorY(-100);
  };

  return (
    <Router>
      <div
        className="App"
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
      >
        <div className="cursor" style={{ left: cursorX, top: cursorY }}></div>{" "}
        {/* Cursor element */}
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
