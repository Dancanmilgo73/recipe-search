import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Nav from "./Components/Nav";
import Recipes from "./Components/Recipes";
import Home from "./Components/Home";
import Modal from "./Components/Modal";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Modal />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" component={Recipes} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
