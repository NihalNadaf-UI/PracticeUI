import React from "react";

const initialState = 0;
const IncrementDecrementReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default IncrementDecrementReducer;
