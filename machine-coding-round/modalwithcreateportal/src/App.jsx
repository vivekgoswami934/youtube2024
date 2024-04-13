import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((p) => !p);
  };

  return (
    <div style={{height : "200px"}}>
      <h1>Modal Component</h1>
      <button onClick={handleClick}>Click me</button>

      {show && (
        <Modal show={show} handleHide={handleClick} >
          <h1>I am a simple Modal</h1>
        </Modal>
      )}
    </div>
  );
}

export default App;
