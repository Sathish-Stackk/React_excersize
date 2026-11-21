import { useState } from "react";

function App() {
  const [number] = useState(
    () => Math.floor(Math.random() * 10) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess 1 to 10");

  const check = () => {
    if (!guess || Number(guess) < 1 || Number(guess) > 10) {
      setMessage("Enter a number from 1 to 10");
    } else {
      setMessage(
        Number(guess) === number ? "Correct!" :
        Number(guess) < number ? "Try a higher number" :
        "Try a lower number"
      );
    }
  };

  return (
    <div>
      <h2>Number Guessing Game</h2>
      <input type="number" value={guess}
        onChange={e => setGuess(e.target.value)} />
      <button onClick={check}>Check</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
