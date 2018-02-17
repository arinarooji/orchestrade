import React, { Component } from "react";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import API from "../../utils/API";

class LoginPage extends Component {

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
        name: '',
        password: ''
      }
    };

    

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  // /**
  //  * Change the user object.
  //  *
  //  * @param {object} event - the JavaScript event object
  //  */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  auth = event => {
    console.log("api")

    API.auth().then(results => {
        console.log(results)

      });
  };

  // /**
  //  * Process the form.
  //  *
  //  * @param {object} event - the JavaScript event object
  //  */
  processForm(event) {
    
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    this.auth()
    const school = encodeURIComponent(this.state.user.school);
    const email = encodeURIComponent(this.state.user.email);
    const username = encodeURIComponent(this.state.user.username);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `school=${school}&email=${email}&username=${username}&password=${password}`;

    // create an AJAX request
    // const xhr = new XMLHttpRequest();
    // xhr.open('post', '/api/auth/signup');
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhr.responseType = 'json';


    // xhr.addEventListener('load', () => {
    //   if (xhr.status === 200) {
    //     // success

    //     // change the component-container state
    //     this.setState({
    //       errors: {}
    //     });

    //     console.log('The form is valid');
    //   } else {
    //     // failure

    //     const errors = xhr.response.errors ? xhr.response.errors : {};
    //     errors.summary = xhr.response.message;

    //     this.setState({
    //       errors
    //     });
    //   }
    // });
    // xhr.send(formData);
  
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
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;
