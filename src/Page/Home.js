import React from "react";
import "../CSS/Home.css";

function Home({ inputToFocus }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <section id="fly-in" ref={inputToFocus}>
        <div>
          <div>
            Hello
            <br />
            Thank you for visitng!
          </div>
        </div>
        <div>Welcome to YooJun's Portfolio page</div>
        <div>Hope you enjoy!</div>
        <div>Scroll Down if you want some more</div>
      </section>
    </div>
  );
}

export default Home;
