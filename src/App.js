import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <h2>The count from App is:{count} </h2>
      <Counter></Counter>
    </div>
  );
}

export default App;
