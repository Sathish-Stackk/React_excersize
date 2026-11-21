import { useState } from "react";

function App() {
  const [birth, setBirth] = useState("");
  const age = birth
    ? new Date().getFullYear() - new Date(birth).getFullYear()
    : "";

  return (
    <div>
      <h2>Age Calculator</h2>
      <input type="date" value={birth}
        onChange={e => setBirth(e.target.value)} />
      <h3>Your Age: {age} years</h3>
    </div>
  );
}

export default App;
