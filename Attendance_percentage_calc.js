import { useState } from "react";

function App() {
  const [present, setPresent] = useState("");
  const [total, setTotal] = useState("");

  const percentage = Number(total) > 0
    ? ((present / total) * 100).toFixed(2) : 0;

  return (
    <div>
      <h2>Attendance Calculator</h2>
      <input type="number" placeholder="Classes attended"
        onChange={e => setPresent(e.target.value)} />
      <input type="number" placeholder="Total classes"
        onChange={e => setTotal(e.target.value)} />
      <h3>Attendance: {percentage}%</h3>
    </div>
  );
}

export default App;
