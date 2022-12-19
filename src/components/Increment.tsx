import React from "react";
import {
  IncrementAction,
  DecrementAction,
} from "../action/IncrementDecrementAction";
import { useSelector, useDispatch } from "react-redux";

function Increment() {
  const myState = useSelector((state: any) => state.IncrementDecrementReducer);
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container">
        <button onClick={() => dispatch(DecrementAction())}>
          <h3> - </h3>
        </button>
        <input type="text" value={myState} />
        <button onClick={() => dispatch(IncrementAction())}>
          <h3> + </h3>
        </button>
      </div>
    </div>
  );
}

export default Increment;
