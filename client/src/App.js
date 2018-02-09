import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage'
import About from './components/About/About'

class App extends Component {
  render() {
    return (
      <div>
        <LoginPage/>
        <About/>
      </div>
    );
  }
}

export default App;
