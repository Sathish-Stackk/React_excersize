import { useState } from "react";

function App() {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);

  const total = Number(price) * Number(quantity);

  return (
    <div>
      <h2>Shopping Calculator</h2>
      <input type="number" placeholder="Product price"
        onChange={e => setPrice(e.target.value)} />
      <input type="number" min="1" value={quantity}
        onChange={e => setQuantity(e.target.value)} />
      <h3>Total Price: ₹{total}</h3>
    </div>
  );
}

export default App;
