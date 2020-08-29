import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("rgb(255, 255, 255)");

  const getRandomRGB = () => {
    return Math.floor(Math.random() * 256);
  };

  const changeBackground = () => {
    const col1 = getRandomRGB();
    const col2 = getRandomRGB();
    const col3 = getRandomRGB();

    setText(`rgb(${col1}, ${col2}, ${col3})`);
  };

  return (
    <div className="app" style={{ background: `${text}` }}>
      <button className="change-btn" onClick={changeBackground}>
        Change Background
      </button>
      <p className="color-text">{text}</p>
    </div>
  );
}
