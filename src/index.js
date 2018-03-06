import React from "react";
import { render } from "react-dom";
import InputBox from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left"
};
const possibleResults = [
  "pallavi",
  "paint",
  "here",
  "pallu",
  "a",
  "ap",
  "app",
  "kill",
  "the",
  "dracula",
  ":P"
];

const App = () => (
  <div style={styles}>
    <h2>Search App {"\u2728"}</h2>
    <InputBox possibleResults={possibleResults} />
  </div>
);

render(<App />, document.getElementById("root"));
