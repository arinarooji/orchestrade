import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
<<<<<<< HEAD
import ManagePage from './pages/ManagePage'

=======
import AddPage  from './pages/AddPage'
import ManagePage from './pages/ManagePage'


>>>>>>> c4c63ff1ea7c514e424c2668135768b6b8c510d4
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
              <Route exact path="/add" component={AddPage} />
<<<<<<< HEAD
              {/* Manage page */}
              {/* Add page */}
=======
>>>>>>> c4c63ff1ea7c514e424c2668135768b6b8c510d4
              <Route exact path="/manage" component={ManagePage} />
              <Route component={IndexPage} />
            </Switch>
          </div>
        </Router>
      </div>
      );
  }
}

export default App;
