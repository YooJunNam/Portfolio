import React from "react";
import "../CSS/Home.css";

function Home({inputToFocus}) {
  return (
    <>
      <section id="fly-in" ref={inputToFocus}>

        <div>
          <div style={{ marginTop: "100px" }}>Hello</div> Thank you for
          vissitng!
        </div>
        <div>Welcome to YooJun's Portfolio page</div>
        <div>Hope you enjoy!</div>
        <div>Scroll Down if you want some more</div>
      </section>
    </>
  );
}

export default Home;
