import React from "react";
import RootReducer from "./reducers/RootReducer";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(RootReducer, composeEnhancers());

export default store;
