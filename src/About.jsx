import React from "react";
import mainImg from "./assets/undraw_to_do_list_re_9nt7 1.png"

function About() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome .</h1>
        <p>This is my first challenge with Html&CSS.</p>
      </div>

      <div className="image-style">
        <img src={mainImg} alt="main image" />
      </div>
      <div className="bottom-text">
        This app cteated by <span> Aon2023</span>
      </div>
    </div>
  );
}
export default About;
