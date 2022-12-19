import React from "react";
import IncrementDecrementReducer from "./IncrementDecrementReducer";
import { combineReducers } from "redux";

//above pkg is used to store all reducers under one roof

const RootReducer = combineReducers({ IncrementDecrementReducer });

export default RootReducer;
