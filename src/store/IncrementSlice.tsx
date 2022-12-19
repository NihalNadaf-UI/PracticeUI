import { createSlice } from "@reduxjs/toolkit";

const incrementSlice = createSlice({
  name: "Increment",
  initialState: {
    initialCounter: 0,
  },
  reducers: {
    increment(state, action) {
      state.initialCounter += parseInt(action.payload);
    }, //these are pure funtions
  },
});

export const { increment } = incrementSlice.actions;
export default incrementSlice.reducer;
