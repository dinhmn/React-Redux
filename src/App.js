import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import "./App.css";
import Counter from "./components/Counter";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import Card from "./uis/Card";

function App() {
  // const count = useSelector((state) => state.counter.count);
  // const globalOptions = useSelector((state) => state.global);
  const dispatch = useDispatch();
  // const handleToggleDarkmode = () => {
  //   dispatch(toggleDarkMode(true));
  // };
  const [darkMode, setDarkMode] = useDarkMode();
  // useEffect(() => {
  //   dispatch(toggleDarkMode(darkMode));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(!darkMode));
  };
  return (
    <div className="App">
      {/* <h2>The count from App is:{count} </h2>
      <Counter></Counter> */}
      <Card></Card>
      <button onClick={handleToggleDarkMode}>Toggle dark mode</button>
    </div>
  );
}

export default App;
