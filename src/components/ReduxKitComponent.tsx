import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store/IncrementSlice";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
// import { useDispatch } from "react-redux";

const ReduxKitComponent = () => {
  const counter = useSelector((state: any) => state.counetr.initialCounter);
  const dispatch = useDispatch();

  const [value, setForm] = useState();
  const myState = useSelector((state: any) => state.increment);

  function getData(val: any) {
    setForm(val.target.value);
  }
  return (
    <div style={{ marginTop: "100px" }}>
      <input type="number" onChange={getData} />
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment(value))}>Increment</button>
    </div>
  );
};

export default ReduxKitComponent;
