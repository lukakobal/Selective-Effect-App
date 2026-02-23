import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const [username, setUsername] = useState("");

  useEffect(() => {
    console.log("Effect se je sprožil zaradi count spremembe");
  }, [count]);

  return (
    <div className="container">
      <h1>React 91 – Dependency Control</h1>

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>

      <hr />

      <input
        type="text"
        placeholder="Vpiši ime"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <p>Username: {username}</p>
    </div>
  );
}
