import { useState } from "react";

function App() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const finalPrice = Number(price) -
    (Number(price) * Number(discount)) / 100;

  return (
    <div>
      <h2>Discount Calculator</h2>
      <input type="number" placeholder="Original price"
        onChange={e => setPrice(e.target.value)} />
      <input type="number" placeholder="Discount %"
        onChange={e => setDiscount(e.target.value)} />
      <h3>Final Price: ₹{finalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default App;
