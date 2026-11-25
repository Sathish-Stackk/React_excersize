import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(10);

  const tipAmount = Number(bill) * tip / 100;

  return (
    <div>
      <h2>Tip Calculator</h2>
      <input type="number" placeholder="Bill amount"
        value={bill} onChange={e => setBill(e.target.value)} />
      <select value={tip}
        onChange={e => setTip(Number(e.target.value))}>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="15">15%</option>
        <option value="20">20%</option>
      </select>
      <p>Tip: ₹{tipAmount.toFixed(2)}</p>
      <p>Total: ₹{(Number(bill) + tipAmount).toFixed(2)}</p>
    </div>
  );
}

export default App;
