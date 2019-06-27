import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Boast from "./components/index.js";
import BoastFilter from "./components/boasts"
import RoastFilter from "./components/roasts"

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Boast} />
        <Route path="/boasts" exact component={BoastFilter} />
        <Route path="/roasts" exact component={RoastFilter} />
    </Router>
    );
  }
}

export default App;