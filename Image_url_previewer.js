import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");

  return (
    <div>
      <h2>Image Previewer</h2>
      <input placeholder="Paste image URL"
        value={url} onChange={e => setUrl(e.target.value)} />
      {url && (
        <div>
          <img src={url} alt="Preview"
            style={{ width: "200px", marginTop: "10px" }}
            onError={e => e.currentTarget.style.display = "none"}
            onLoad={e => e.currentTarget.style.display = "block"} />
        </div>
      )}
    </div>
  );
}

export default App;
