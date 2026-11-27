import { useState } from "react";

function App() {
  const [habits, setHabits] = useState([
    { name: "Reading", done: false },
    { name: "Exercise", done: false },
    { name: "Coding", done: false }
  ]);

  const toggleHabit = (index) => {
    setHabits(habits.map((habit, i) =>
      i === index ? { ...habit, done: !habit.done } : habit
    ));
  };

  return (
    <div>
      <h2>Daily Habit Tracker</h2>
      {habits.map((habit, i) => (
        <p key={habit.name}>
          <input type="checkbox" checked={habit.done}
            onChange={() => toggleHabit(i)} />
          {habit.name} {habit.done ? "Completed" : "Pending"}
        </p>
      ))}
      <h3>Completed: {habits.filter(h => h.done).length}/3</h3>
    </div>
  );
}

export default App;
