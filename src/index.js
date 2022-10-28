import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, bindActionCreators } from "redux";
import * as actions from "./actions";
import reducer from "./reducer";

const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const update = () => {
  document.getElementById("counter").innerHTML = getState().value;
};

subscribe(() => update());

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.getElementById("inc").addEventListener("click", inc);
document.getElementById("dec").addEventListener("click", dec);
document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);
  rnd(value);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);
