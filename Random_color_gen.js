import { useState } from "react";

function App() {
  const [color, setColor] = useState("#ffffff");

  const generate = () => {
    const random = "#" + Math.floor(
      Math.random() * 16777215
    ).toString(16).padStart(6, "0");
    setColor(random);
  };

  return (
    <div style={{ backgroundColor: color, padding: "40px" }}>
      <h2>Color Generator</h2>
      <h3>{color}</h3>
      <button onClick={generate}>Generate Color</button>
    </div>
  );
}

export default App;
