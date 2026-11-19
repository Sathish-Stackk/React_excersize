import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (!amount || Number(amount) <= 0) return;
    setExpenses([...expenses, Number(amount)]);
    setAmount("");
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <input type="number" value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Enter amount" />
      <button onClick={addExpense}>Add Expense</button>
      <p>Total: ₹{expenses.reduce((a, b) => a + b, 0)}</p>
      <ul>{expenses.map((e, i) => <li key={i}>₹{e}</li>)}</ul>
    </div>
  );
}

export default App;
