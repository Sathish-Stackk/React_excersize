import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const next = new Date(now.getFullYear() + 1, 0, 1);
      const diff = next - now;

      const days = Math.floor(diff / 86400000);
      const hours = Math.floor(diff / 3600000) % 24;
      const minutes = Math.floor(diff / 60000) % 60;

      setTime(`${days} Days ${hours} Hours ${minutes} Minutes`);
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div><h2>New Year Countdown</h2><h3>{time}</h3></div>;
}

export default App;
