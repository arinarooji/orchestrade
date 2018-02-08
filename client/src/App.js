import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'

class App extends Component {
  render() {
    return (
      <div>
        <Login/>
        <Signup/>
      </div>
    );
  }
}

export default App;
