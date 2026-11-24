import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h2>Password Visibility</h2>
      <input
        type={visible ? "text" : "password"}
        value={password}
        placeholder="Enter password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"} Password
      </button>
    </div>
  );
}

export default App;
