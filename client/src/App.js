import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import RequestPage from './pages/RequestPage/RequestPage';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/browse" component={BrowsePage} />
              <Route exact path="/request" compondent={RequestPage}/>
              {/* Add page */}
              {/* Manage page */}
              <Route component={IndexPage} />
            </Switch>
          </div>
        </Router>
      </div>
      );
  }
}

export default App;
