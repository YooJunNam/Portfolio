import React, { useRef } from "react";
import "./CSS/App.css";
import Header from "./Page/Header";
import Home from "./Page/Home";
import About from "./Page/About";
import Skills from "./Page/Skills";
import Projects from "./Page/Projects";
import Contact from "./Page/Contact";
import { Route } from "react-router-dom";

function App() {
  const scrollAboutBtn = useRef();

  return (
    <>
      <Header></Header>
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
