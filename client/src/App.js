import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Navi from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navi/>
        <Login/>
        <Signup/>
      </div>
    );
  }
}

export default App;
