import { useState } from "react";

function App() {
  const [result, setResult] = useState("Choose your move!");
  const choices = ["Rock", "Paper", "Scissors"];

  const play = (user) => {
    const computer = choices[Math.floor(Math.random() * 3)];

    if (user === computer) setResult("It's a Draw!");
    else if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) setResult("You Win!");
    else setResult("Computer Wins!");

    setResult(prev => `${prev} Computer chose ${computer}.`);
  };

  return (
    <div>
      <h2>Rock Paper Scissors</h2>
      {choices.map(choice => (
        <button key={choice} onClick={() => play(choice)}>
          {choice}
        </button>
      ))}
      <p>{result}</p>
    </div>
  );
}

export default App;
