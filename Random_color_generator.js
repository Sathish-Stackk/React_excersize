
import { useState } from "react";

function ColorGenerator() {
  const [color, setColor] = useState("#3498db");

  const generateColor = () => {
    setColor("#" + Math.floor(Math.random() * 16777215)
      .toString(16).padStart(6, "0"));
  };

  return (
    <div style={{ background: color, padding: "30px" }}>
      <h2>{color}</h2>
      <button onClick={generateColor}>Change Color</button>
    </div>
  );
}

export default ColorGenerator;
