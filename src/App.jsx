import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainContent } from "./components/MainContent";
import Contact from "./components/Contact";
import Project from "./components/Project";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="projects" element={<Project />} />
        <Route path="skills" element={<Skills />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
};

export default App;
