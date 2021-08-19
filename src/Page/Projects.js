import React from "react";
import ourlegacy from "../Img/ourlegacy.png";
import momentum from "../Img/Momentum2.PNG";
import github from "../Img/github.png";
import "../CSS/Skills.css";
import portfolio from "../Pdf/portfolio.pdf";

function Projects() {
  return (
    <section id="sectionProjects">
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
            <p>바닐라 자바스크립트 활용</p>

            <div style={{ textAlign: "center" }}>
              <a href="https://github.com/YooJunNam">
                <img
                  className="hoverImg"
                  src={github}
                  style={{ height: "40px", width: "40px" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="projectBox">
          <div style={{ margin: "30px" }}>
            <img width="300px" height="200px" src={ourlegacy}></img>
          </div>
          <div style={{ margin: "30px" }}>
            <h3>Our legacy 쇼핑몰 클론</h3>
            <p>협업 프로젝트</p>
            <p>React framwork 활용</p>
            <div style={{ textAlign: "center" }}>
              <a style={{}} href="https://github.com/YooJunNam">
                <img
                  className="hoverImg"
                  src={github}
                  style={{ height: "40px", width: "40px" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="projectBox">
          <div style={{ margin: "30px" }}>
            <img width="300px" height="200px" src={momentum}></img>
          </div>
          <div style={{ margin: "30px" }}>
            <h3>Protfolio Page</h3>
            <p>개인 프로젝트</p>
            <p>HTMl, CSS 위주 React</p>
            <div style={{ textAlign: "center" }}>
              <a style={{}} href="https://github.com/YooJunNam">
                <img
                  className="hoverImg"
                  src={github}
                  style={{ height: "40px", width: "40px" }}
                />
              </a>
            </div>
          </div>
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
