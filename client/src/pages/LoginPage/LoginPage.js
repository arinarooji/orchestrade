import React, { Component } from 'react';
import Login from '../../components/Login';
import Signup from '../../components/Signup';

class LoginPage extends Component {
    render() {
      return (
        <div>
          <Login/>
          <Signup/>
        </div>
      );
    }
}
  
export default LoginPage;