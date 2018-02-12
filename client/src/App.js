import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
<<<<<<< HEAD
import AddPage  from './pages/AddPage'
=======
import ManagePage from './pages/ManagePage'

>>>>>>> 082a48dff2fbd569757cd1416ea9e5a1aa084432

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
<<<<<<< HEAD
              <Route exact path="/add" component={AddPage} />
              {/* Manage page */}
=======
              {/* Add page */}
              <Route exact path="/manage" component={ManagePage} />
>>>>>>> 082a48dff2fbd569757cd1416ea9e5a1aa084432
              <Route component={IndexPage} />
            </Switch>
          </div>
        </Router>
      </div>
      );
  }
}

export default App;
