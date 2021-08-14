import React from "react";
import "./CSS/App.css";
import Header from "./Page/Header";
import Home from "./Page/Home";
import About from "./Page/About";
import Skills from "./Page/Skills";
import Projects from "./Page/Projects";
import Contact from "./Page/Contact";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
