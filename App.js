import React from "react";
import ReactDOM from "react-dom/client";
/*
 *<div id="parent">
 *<div id="child1">
 *<h1 >I'm h1 tag</h1>
 *<h2>I'm h2 tag</h2>
 *</div>
 *<div id="child2">
 *<h1 >I'm h1 tag</h1>
 *<h2>I'm h2 tag</h2>
 *</div>
 *<div>
 *
 *
 * ReactElement=>(Object)=>HTML Element(Browser renders)
 */

const parent = React.createElement(
  "h1",
  { id: "heading" },
  "This is namaste react 🚀"
);
console.log(parent);

//JSX - HTML like syntax or XML like syntax
// JSX (transpiled to JS code) - babel
// JSX => React.createElement => ReactElement- JS Object => HTMLElement (render)

//React Element
const jsxheding = <h1 className="head">Namaste React in JSX</h1>;

const Title = function () {
  return <h1>Namaste React</h1>;
};
//React Component
const HeadingComponent = () => {
  return (
    <div id="container">
      {Title()}
      <Title />
      <Title></Title>
      <h1>Namaste Functional Components</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
