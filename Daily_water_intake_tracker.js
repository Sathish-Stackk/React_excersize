import { useState } from "react";

function App() {
  const [glasses, setGlasses] = useState(0);
  const target = 8;

  return (
    <div>
      <h2>Water Intake Tracker</h2>
      <h3>{glasses} / {target} Glasses</h3>
      <button onClick={() =>
        setGlasses(g => Math.min(g + 1, target))}>
        Add Glass
      </button>
      <button onClick={() => setGlasses(0)}>
        Reset
      </button>
      <p>{glasses >= target ? "Daily target completed!" :
        `${target - glasses} glasses remaining`}</p>
    </div>
  );
}

export default App;
