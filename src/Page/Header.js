import React from "react";
import "../CSS/Header.css";
import hamburger from "../Img/hamburger.jpg";

function Header() {
  return (
    <>
      <div
        className="container"
        style={{
          width: "100vw",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          zIndex: 1000,
        }}
      >
        <div className="leftMenu">
          <div style={{ height: "58.4px" }}>
            <a href="">
              <span className="nuJooy">NUJOOY</span>
            </a>
          </div>
        </div>
        <div className="rightMenu">
          <ul>
            <li>
              <a href="#sectionAbout">About</a>
            </li>
            <li>
              <a>Skills</a>
            </li>

            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <div className="hamburgerMenu">
              <img
                style={{ width: "35px", height: "22px", pointer: "cursor" }}
                src={hamburger}
                alt="hamburgers"
              ></img>
            </div>
          </ul>
        </div>
      </div>
      <div className="mobileMenu">
        <div
          style={{
            paddingTop: "100px",
            paddingLeft: "100px",
          }}
        >
          <span style={{ fontSize: "25px", color: "white", cursor: "pointer" }}>
            About
          </span>
        </div>
        <div
          style={{
            paddingTop: "10px",
            paddingLeft: "100px",
          }}
        >
          <span style={{ fontSize: "25px", color: "white", cursor: "pointer" }}>
            Skills
          </span>
        </div>
        <div
          style={{
            paddingTop: "10px",
            paddingLeft: "100px",
          }}
        >
          <span style={{ fontSize: "25px", color: "white", cursor: "pointer" }}>
            Projects
          </span>
        </div>
        <div
          style={{
            paddingTop: "10px",
            paddingLeft: "100px",
          }}
        >
          <span style={{ fontSize: "25px", color: "white", cursor: "pointer" }}>
            Contact
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
