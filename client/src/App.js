import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import AddPage  from './pages/AddPage'
import ManagePage from './pages/ManagePage'
import SettingsPage from './pages/SettingsPage'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/browse" component={BrowsePage} />
              <Route exact path="/add" component={AddPage} />
              <Route exact path="/manage" component={ManagePage} />
              <Route exact path="/settings" component={SettingsPage} />
              <Route component={HomePage} />
            </Switch>
          </div>
        </Router>
      </div>
      );
  }
}

export default App;
