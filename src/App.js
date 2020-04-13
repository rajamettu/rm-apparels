import React from "react";

import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage";

import "./App.css";

const HatsPage = () => {
  return (
    <h1>
      <h1>Hats Page</h1>
    </h1>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
