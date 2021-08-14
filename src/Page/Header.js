import React from "react";
import styled from "styled-components";
import "../CSS/Header.css";
function Header() {
  return (
    <div className="container">
      <div className="leftMenu">
        <a>
          <span className="nuJooy">NUJOOY</span>
        </a>
      </div>
      <div className="rightMenu">
        <ul>
          <li>
            <a>About</a>
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
        </ul>
      </div>
    </div>
  );
}

export default Header;
