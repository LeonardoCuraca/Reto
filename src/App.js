import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact="" path="/" component={LoginPage} />
          <Route exact="" path="/main" component={MainPage} />
        </Router>
      </div>
    )
  }
}
