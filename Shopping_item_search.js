import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const products = ["Laptop", "Mobile", "Keyboard", "Mouse", "Monitor"];

  const filtered = products.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Product Search</h2>
      <input
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {filtered.map(item => <p key={item}>{item}</p>)}
      {filtered.length === 0 && <p>No products found.</p>}
    </div>
  );
}

export default App;
