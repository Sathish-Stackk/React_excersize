import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const letters = (text.match(/[a-z]/gi) || []).length;
  const digits = (text.match(/[0-9]/g) || []).length;
  const spaces = (text.match(/\s/g) || []).length;

  return (
    <div>
      <h2>Character Analyzer</h2>
      <textarea value={text}
        onChange={e => setText(e.target.value)} />
      <p>Letters: {letters}</p>
      <p>Numbers: {digits}</p>
      <p>Spaces: {spaces}</p>
    </div>
  );
}

export default App;
