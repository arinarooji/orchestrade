import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'

class App extends Component {
  render() {
    return (
      <div>
         {/* <IndexPage/> */}
        <HomePage/>
      </div>
      );
  }
}

export default App;
