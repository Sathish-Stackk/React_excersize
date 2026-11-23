
import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Character Counter</h2>
      <textarea value={text}
        onChange={(e) => setText(e.target.value)} />
      <p>Characters: {text.length}</p>
      <p>Words: {text.trim() ? text.trim().split(/\s+/).length : 0}</p>
    </div>
  );
}

export default CharacterCounter;
