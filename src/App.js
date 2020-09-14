import React from "react";
import logo from "./logo.svg";
import Homepage from "./pages/Homepage";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
