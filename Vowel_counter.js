import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const count = (text.match(/[aeiou]/gi) || []).length;

  return (
    <div>
      <h2>Vowel Counter</h2>
      <textarea value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter your text" />
      <h3>Total Vowels: {count}</h3>
    </div>
  );
}

export default App;
