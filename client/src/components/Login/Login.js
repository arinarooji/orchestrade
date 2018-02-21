
import React, { Component } from "react";
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Label,
  Input,
  Button,
  Small
} from "reactstrap";

export default withAuth(class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      error: null,
      username: '',
      password: ''
    }

    this.oktaAuth = new OktaAuth({ url: props.baseUrl });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
  };
}

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => this.setState({
        sessionToken: res.sessionToken
      }))
      .catch(err => {
        this.setState({error: err.message});
        console.log(err.statusCode + ' error', err)
      });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return null;
    }

    const errorMessage = this.state.error ? 
    <span className="error-message">{this.state.error}</span> : 
    null;

    return (
      <div>
        <Navbar color="faded" light expand="md">
          <div className="container">
            <NavbarBrand href="/home">Orchestrade</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <Form className="form-inline mr-4" onSubmit={this.handleSubmit}>
                {errorMessage}
                <div className="form-group">
                <Input 
                className="form-control form-control-sm mr-sm-2" 
                placeholder="Username" 
                id="username" 
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange} 
                />
                </div>
                <div className="form-group">
                <Input 
                className="form-control form-control-sm mr-sm-2" 
                placeholder="Password" 
                id="password" 
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                />
                </div>
                <Button 
                className="btn btn-sm btn-outline-secondary my-2 my-sm-0"
                id="submit" 
                type="submit" 
                value="Submit"
                >Log in
                </Button>
                <div className="ml-2">
                <small className="form-text text-muted"><a href="">Forgot account?</a></small>
                </div>
              </Form>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
});
