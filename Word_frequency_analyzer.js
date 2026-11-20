import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const words = text.toLowerCase().trim()
    .split(/\s+/).filter(Boolean);

  const frequency = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h2>Word Frequency Analyzer</h2>
      <textarea value={text}
        onChange={e => setText(e.target.value)} />
      {Object.entries(frequency).map(([word, count]) => (
        <p key={word}>{word}: {count}</p>
      ))}
    </div>
  );
}

export default App;
