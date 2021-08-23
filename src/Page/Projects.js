import React from "react";
import ourlegacy from "../Img/ourlegacy.png";
import momentum from "../Img/Momentum2.PNG";
import github from "../Img/github.png";
import "../CSS/Skills.css";
import portfolio from "../Pdf/portfolio.pdf";
import portfolioImg from "../Img/portfolio.PNG";

function Projects() {
  return (
    <section id="sectionProjects" style={{ paddingTop: "50px" }}>
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
          marginTop: "30px",
        }}
      >
        <h2
          style={{
            color: "rgba(142,142,142)",
            marginBottom: "50px",
          }}
        >
          Projects
        </h2>
      </div>

      <div className="projectsContainer">
        <div className="projectBox">
          <div style={{ margin: "30px" }}>
            <img width="300px" height="200px" src={momentum}></img>
          </div>
          <div style={{ margin: "30px" }}>
            <h3>ToDoList</h3>
            <p>개인 프로젝트</p>
            <p>사용 언어: 바닐라 자바스크립트</p>
            <h4>Simple Description</h4>
            <p>Localstorage를 활용한 간단한 로그인 기능 구현</p>
            <p>외부 API를 활용</p>
          </div>
        </div>
        <div className="MobileProjectGitLink">
          <a href="https://github.com/YooJunNam">
            <img
              className="hoverImg"
              src={github}
              style={{ height: "40px", width: "40px" }}
            />
          </a>
        </div>
        <div className="projectBox">
          <div style={{ margin: "30px" }}>
            <img width="300px" height="200px" src={ourlegacy}></img>
          </div>
          <div style={{ margin: "30px" }}>
            <h3>Our legacy 쇼핑몰 클론</h3>
            <p>협업 프로젝트</p>
            <p>사용 언어 : HTML, CSS , React framwork 활용</p>
            <h4>Simple Description</h4>
            <p>세션, 쿠키를 활용한 로그인 기능 구현</p>
            <p>React Router Dom 으로 SPA 구조 구현</p>
          </div>
        </div>
        <div className="MobileProjectGitLink">
          <a href="https://github.com/YooJunNam">
            <img
              className="hoverImg"
              src={github}
              style={{ height: "40px", width: "40px" }}
            />
          </a>
        </div>
        <div className="projectBox">
          <div style={{ margin: "30px" }}>
            <img width="300px" height="200px" src={portfolioImg}></img>
          </div>
          <div style={{ margin: "30px" }}>
            <h3>Protfolio Page</h3>
            <p>개인 프로젝트</p>
            <p>사용 언어 : HTMl, CSS 위주 React</p>
            <h4>Simple Description</h4>
            <p>기본적인 HTML,CSS를 통한 animation 구현</p>
          </div>
        </div>
        <div className="MobileProjectGitLink">
          <a href="https://github.com/YooJunNam">
            <img
              className="hoverImg"
              src={github}
              style={{ height: "40px", width: "40px" }}
            />
          </a>
        </div>
      </div>

      <div className="projectGitLinkContainer">
        <div className="projectGitLink">
          <a href="https://github.com/YooJunNam/Momentum">
            <img
              className="hoverImg"
              src={github}
              style={{ height: "40px", width: "40px" }}
            />
          </a>
        </div>
        <div className="projectGitLink">
          <a style={{}} href="https://github.com/YooJunNam/ourlegacy">
            <img
              className="hoverImg"
              src={github}
              style={{ height: "40px", width: "40px" }}
            />
          </a>
        </div>

        <div className="projectGitLink">
          <a style={{}} href="https://github.com/YooJunNam">
            <img
              className="hoverImg"
              src={github}
              style={{ height: "40px", width: "40px" }}
            />
          </a>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
          marginTop: "30px",
        }}
      >
        <button id="foot">
          <button className="button-os">
            <a calssName="more" href={portfolio} download>
              more
            </a>
          </button>
        </button>
      </div>
    </section>
  );
}

export default Projects;
