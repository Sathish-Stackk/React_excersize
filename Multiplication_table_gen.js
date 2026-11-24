import { useState } from "react";

function App() {
  const [number, setNumber] = useState(5);

  return (
    <div>
      <h2>Multiplication Table</h2>
      <input type="number" value={number}
        onChange={e => setNumber(e.target.value)} />
      {Array.from({ length: 10 }, (_, i) => (
        <p key={i}>
          {number} × {i + 1} = {number * (i + 1)}
        </p>
      ))}
    </div>
  );
}

export default App;
