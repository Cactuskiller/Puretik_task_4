import React,{useState} from "react";
import Nav from "./Nav";
import Home from "./home";
import About from "./About";

function App() {

  const [step , setStep] =useState(0);
  return (
    <>
      <Nav step={step} setStep={setStep} />
      {step === 1 && <Home/>}
      {step === 0 && <About/>}
    </>
  );
}
export default App;
