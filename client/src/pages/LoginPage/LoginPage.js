import React, { Component } from "react";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import API from "../../utils/API";

class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        school: '',
        email: '',
        username: '',
        password: ''
      }
    };

    this.Form = this.Form.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }


  // componentDidMount() {
  //   this.createUser();
  // }

  // NEEDS WORK

  auth = event => {
    let user = {
      school: this.state.user.school,
      email: this.state.user.email,
      username: this.state.user.username,
      password: this.state.user.password
    };

    API.createUser(user).then(results => {
      console.log(results)
      });
  };
  Form(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    let user = {
      school: this.state.user.school,
      email: this.state.user.email,
      username: this.state.user.username,
      password: this.state.user.password
    }
    // reach for our inventory and update our state
    this.auth()

    console.log('school:', this.state.user.school);
    console.log('email:', this.state.user.email);
    console.log('username:', this.state.user.username);
    console.log('password:', this.state.user.password);
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <Signup
        onSubmit={this.Form}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;
