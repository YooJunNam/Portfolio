import React from "react";
import styled from "styled-components";
import myprofile from "../Img/profile.jpg";
import "../CSS/about.css";

function About() {
  return (
    <section id="sectionAbout" style={{ paddingTop: "50px" }}>
      <h2
        style={{
          color: "rgba(142,142,142)",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        About Me
      </h2>
      <div className="myProfile">
        <div className="myImage">
          <img
            className="profileImage"
            src={myprofile}
            style={{
              borderRadius: "300px",
              height: "400px",
              marginTop: "10px",
            }}
          ></img>
        </div>

        <div className="aboutMe">
          <p>이름 : 남유준</p>
          <p>생년월일 : 1993.12.15</p>
          <p>주소 : 인천광역시 부평구</p>
          <p>학력 : 가천대학교 컴퓨터공학과(졸업)</p>
          <p>희망 분야 : 프론트엔드 개발자</p>
          <p>
            성격 : 새로운 것에 대한 호기심이 많고 두려움이 없으며 도전적인 성향
          </p>
          <h2>새로운 목표가 생겼습니다.</h2>
          <p>
            대학교 졸업 직 후 도전적인 성향으로 다른 분야에 호기심을 느끼고
            도전을 하였습니다. 도전으로 인해 개발 경험의 공백이 있었지만 끈기를
            가지고 바로 프로젝트를 실행하였습니다. 비록 완벽하지 못하더라도{" "}
            끈기를 가지고 완성을 했다는 점에 의미를 두며 계속해서 계속해서
            발전하기 위해 현재 React를 공부를 시작하여 진행하고 있습니다.
            개발경험 뿐만 아니라 많은 부분의 경험을 쌓아서 프론트엔드 개발자
            뿐만 아니라 다방면으로 적극적으로 참여하는 구성원이 되고 싶습니다.
            또한 이러한 저의 목표와 장점들을 바탕으로 여러분야의 팀원분들과
            원활한 의사소통으로 도움을 줄 수 있는 사람이 됨으로써 회사의 성장과
            같이 성장할 수 있는 사람이 되고 싶습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
