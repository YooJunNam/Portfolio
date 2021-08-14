import React from "react";
import styled from "styled-components";
import myprofile from "../Img/profile.jpg";
import "../CSS/about.css";

function Profile() {
  return (
    <section style={{ padding: "20px" }}>
      <h2
        style={{
          color: "rgba(142,142,142)",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        About Me
      </h2>
      <div style={{ display: "flex", flex: "space-between" }}>
        <div className="myImage">
          <img
            src={myprofile}
            style={{ borderRadius: "300px", height: "350px" }}
          ></img>
        </div>

        <div className="aboutMe">
          <h3>많은 것을 경험하길 좋아하는 남유준 입니다!</h3>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>

          <p>ss</p>
          <p>ss</p>

          <p>
            끊임없이 도전하는 성격으로 많은 일을 할 수 있는 개발자가 되고
            싶습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
