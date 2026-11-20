import { useState } from "react";

function App() {
  const [answers, setAnswers] = useState(["", "", ""]);

  const questions = [
    { q: "React is a?", a: "Library" },
    { q: "JSX means?", a: "JavaScript XML" },
    { q: "React uses?", a: "Components" }
  ];

  const submit = () => {
    const score = answers.filter((a, i) =>
      a.trim().toLowerCase() ===
      questions[i].a.toLowerCase()).length;
    alert(`Your Score: ${score}/3`);
  };

  return (
    <div>
      <h2>React Quiz</h2>
      {questions.map((q, i) => (
        <div key={i}>
          <p>{q.q}</p>
          <input value={answers[i]}
            onChange={e => {
              const updated = [...answers];
              updated[i] = e.target.value;
              setAnswers(updated);
            }} />
        </div>
      ))}
      <button onClick={submit}>Submit Quiz</button>
    </div>
  );
}

export default App;
