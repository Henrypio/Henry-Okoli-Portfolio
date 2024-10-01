import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainContent } from "./components/MainContent";
import Contact from "./components/Contact";
import Project from "./components/Project";
import About from "./components/About";
import Skills from "./components/Skills";
import NotFound from "./components/NotFound";
// import Navbar from "./components/Navbar"; 

const App = () => {
  return (
    <Router>
      {/* <Navbar />  */}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="projects" element={<Project />} />
        <Route path="skills" element={<Skills />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
