import React, { Component } from "react";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import Footer from "../../components/Footer";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Login />
        <Signup />
        <Footer />
      </div>
    );
  }
}

export default LoginPage;
