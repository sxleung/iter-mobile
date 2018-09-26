import React, { Component } from "react";
import { createStore } from "redux";
import { reducer } from "./reducer";

// 2. Stores.js now brings in reducer from reducer.js
export const store = createStore(reducer);
