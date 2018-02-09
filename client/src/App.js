import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'

class App extends Component {
  render() {
    return (
      <div>
        <IndexPage/>
      </div>
    );
  }
}

export default App;
