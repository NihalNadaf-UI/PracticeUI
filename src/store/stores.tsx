import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./IncrementSlice";

const store = configureStore({
  reducer: {
    counetr: counterReducer,
  },
});

export default store;
