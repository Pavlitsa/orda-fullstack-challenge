import React from "react";
import "./App.css";
import EmailTemplate from "./components/EmailTemplate";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/api/orders" component={EmailTemplate} />
      </Switch>
      <EmailTemplate />
    </div>
  );
}

export default App;
