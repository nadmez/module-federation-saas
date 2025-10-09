import React from "react";
import MarketingApp from "../components/MarketingApp";

const App = () => {
  console.log("Hello from Container");
  return (
    <div>
      <h1>Hello from Container</h1>
      <hr />
      <MarketingApp />
    </div>
  );
};

export default App;
