import React, { useRef } from "react";
import { Route } from "react-router-dom";
import "./CSS/App.css";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Header from "./Page/Header";
import Home from "./Page/Home";
import Projects from "./Page/Projects";
import Skills from "./Page/Skills";

function App() {
  const scrollAboutBtn = useRef([]);

  return (
    <>
      <Header></Header>
      <div style={{ height: "61px", width: "100%" }}></div>
      <Route>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </Route>
    </>
  );
}

export default App;
