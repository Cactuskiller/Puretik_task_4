import React, { useState } from "react";
import logoImg from "./assets/ToDo.png";
import App from "./App";

function Nav({step , setStep}) {
 
  return (
    <div className="bg">
      <header className="container">
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <nav className="nav">
          <li>
            <a
              href="#"
              className={step === 1 ? "active" : ""}
              onClick={() => setStep(1)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className={step === 0 ? "active" : ""}
              onClick={()=>setStep(0)}
            >
              About
            </a>
          </li>
        </nav>
      </header>
    </div>
  );
}
export default Nav;
