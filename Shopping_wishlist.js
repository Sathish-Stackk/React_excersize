import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [wishlist, setWishlist] = useState([]);

  const addItem = () => {
    if (!item.trim()) return;
    setWishlist([...wishlist, item.trim()]);
    setItem("");
  };

  return (
    <div>
      <h2>Shopping Wishlist</h2>
      <input value={item} placeholder="Enter product"
        onChange={e => setItem(e.target.value)} />
      <button onClick={addItem}>Add Item</button>
      {wishlist.map((name, i) => (
        <p key={i}>{name}
          <button onClick={() =>
            setWishlist(wishlist.filter((_, index) => index !== i))}>
            Remove
          </button>
        </p>
      ))}
    </div>
  );
}

export default App;
