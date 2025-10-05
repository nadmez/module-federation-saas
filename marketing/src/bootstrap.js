import React from "react";
import ReactDOM from "react-dom";

const App = () => <h1>Hi there from Marketing App</h1>;

const mount = (el) => {
  ReactDOM.render(<App />, el);
  console.log("Marketing app is mounted!");
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
