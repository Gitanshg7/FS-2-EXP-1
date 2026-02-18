import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <div className="card">
        <h1>Redux Counter Application</h1>
        <p className="counter-value">{count}</p>

        <div className="button-group">
          <button className="btn increment" onClick={() => dispatch(increment())}>
            Increment
          </button>

          <button className="btn decrement" onClick={() => dispatch(decrement())}>
            Decrement
          </button>

          <button className="btn reset" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
