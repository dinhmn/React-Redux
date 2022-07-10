import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementbyvalue } from "../redux/counter";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByTen = () => {
    dispatch(incrementbyvalue(10));
  };
  return (
    <div className="flex flex-col items-center p-5 bg-slate-700 text-white w-[400px] mx-auto mt-10 shadow">
      <h2 className="mb-5"> Count: {count}</h2>
      <div className="flex items-center justify-center gap-x-5">
        <button className="inline-block p-2" onClick={handleIncrement}>
          Increment
        </button>
        <button className="inline-block p-2" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="inline-block p-2" onClick={handleIncrementByTen}>
          Increase by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
