import React from "react";
import ourlegacy from "../Img/ourlegacy.png";

function Projects() {
  return (
    <section>
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

      <div
        style={{
          display: "flex",
          flex: "space-between",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: "2px solid black",
            marginRight: "30px",
            marginLeft: "30px",
            boxShadow: "5px 5px 5px 5px gray",
          }}
        >
          <img width="300px" src={ourlegacy}></img>
          <h3>ToDoList</h3>
          <p>개인 프로젝트</p>
          <p>바닐라 자바스크립트 활용</p>
        </div>
        <div
          style={{
            border: "2px solid black",
            marginRight: "30px",
            marginLeft: "30px",
            boxShadow: "5px 5px 5px 5px gray",
          }}
        >
          <img width="300px" src={ourlegacy}></img>
          <h3>ToDoList</h3>
          <p>개인 프로젝트</p>
          <p>바닐라 자바스크립트 활용</p>
        </div>
        <div
          style={{
            border: "2px solid black",
            marginRight: "30px",
            marginLeft: "30px",
            boxShadow: "5px 5px 5px 5px gray",
          }}
        >
          <img width="300px" src={ourlegacy}></img>
          <h3>ToDoList</h3>
          <p>개인 프로젝트</p>
          <p>바닐라 자바스크립트 활용</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
