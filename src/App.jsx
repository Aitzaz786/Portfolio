import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import { useEffect } from "react";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.slice(1); // removes '/'
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/skills" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/fotter" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
