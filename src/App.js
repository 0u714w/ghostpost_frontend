import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Boast from "./components/index.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Boast} />
    </Router>
    );
  }
}

export default App;