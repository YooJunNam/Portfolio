import React from "react";
import instagram from "../Img/instagram.png";
import notion from "../Img/notion.png";
import styled from "styled-components";
import github from "../Img/github.png";

function Contact() {
  return (
    <section
      id="sectionContacts"
      style={{ height: "200px", backgroundColor: "rgba(204,153,204)" }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "rgba(142,142,142)",
            marginBottom: "20px",
          }}
        >
          Contact
        </h2>
      </div>

      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <a style={{}} href="mailto:yjn7448@gmail.com" class="contact-icon">
          <svg
            className="hoverImg"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="40px"
            width="40px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
          </svg>
        </a>

        <a style={{}} href="https://github.com/YooJunNam">
          <img
            className="hoverImg"
            src={github}
            style={{ height: "40px", width: "40px" }}
          />
        </a>

        <a href="https://www.instagram.com/nujooy_/" style={{}}>
          <img
            className="hoverImg"
            style={{ height: "40px", width: "40px" }}
            src={instagram}
          ></img>
        </a>

        <a
          style={{}}
          href="https://www.notion.so/TIL-c5c479640d5c4111857f07d82b56d35a"
        >
          <img
            className="hoverImg"
            style={{ height: "40px", width: "40px" }}
            src={notion}
          ></img>
        </a>
      </div>
      <div style={{ textAlign: "center", fontWeight: "500" }}>
        © 2021. Nam Yoo Jun. All rights reserved.
      </div>
    </section>
  );
}

export default Contact;
