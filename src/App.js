import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>The count from App is:{count} </h2>
      <Counter count={count} setCount={setCount}></Counter>
    </div>
  );
}

export default App;
