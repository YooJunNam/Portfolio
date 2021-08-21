import React, { useState } from "react";
import "../CSS/Header.css";
import hamburger from "../Img/hamburger.jpg";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
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
              <a href="#sectionSkills">Skills</a>
            </li>

            <li>
              <a href="#sectionProjects">Projects</a>
            </li>
            <li>
              <a href="#sectionContacts">Contact</a>
            </li>
            <div
              className="hamburgerMenu"
              onClick={() => {
                setMobileMenu((prevState) => !prevState);
              }}
            >
              <img
                style={{ width: "35px", height: "22px", pointer: "cursor" }}
                src={hamburger}
                alt="hamburgers"
              ></img>
            </div>
          </ul>
        </div>
      </div>
      {mobileMenu ? (
        <div
          className="mobileMenu"
          style={{
            position: "fixed",
            left: "px",
            top: "55px",
            height: "220px",
            zIndex: "1000",
          }}
        >
          <div style={{ paddingTop: "10px", paddingLeft: "100px" }}>
            <span
              style={{ fontSize: "25px", color: "white", cursor: "pointer" }}
            >
              <a
                href="#sectionAbout"
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                About
              </a>
            </span>
          </div>
          <div
            style={{
              paddingTop: "10px",
              paddingLeft: "100px",
            }}
          >
            <span
              style={{ fontSize: "25px", color: "white", cursor: "pointer" }}
            >
              {" "}
              <a
                href="#sectionSkills"
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                Skills
              </a>
            </span>
          </div>
          <div
            style={{
              paddingTop: "10px",
              paddingLeft: "100px",
            }}
          >
            <span
              style={{ fontSize: "25px", color: "white", cursor: "pointer" }}
            >
              <a
                href="#sectionProjects"
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                Projects
              </a>
            </span>
          </div>
          <div
            style={{
              paddingTop: "10px",
              paddingLeft: "100px",
            }}
          >
            <span
              style={{ fontSize: "25px", color: "white", cursor: "pointer" }}
            >
              <a
                href="#sectionContacts"
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                Contact
              </a>
            </span>
          </div>
        </div>
      ) : undefined}
    </>
  );
}

export default Header;
