import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pin from "./components/Pin";

function App() {
  const [pin, setPin] = useState("");

  const getThePin = (value) => {
    setPin(value);
  };

  return (
    <>
      <h2>React Pin Component</h2>
      <Pin length={4} perInputBoxLength={3} getThePinFn = {getThePin} />
      <h4>Pin is- {pin}</h4>
    </>
  );
}

export default App;
