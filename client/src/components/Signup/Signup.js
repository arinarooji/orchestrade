import React, { Component } from "react";
import PropTypes from 'prop-types';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import config from '../../app.config';

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

export default withAuth(class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      school: '',
      email: '',
      username: '',
      password: '',
      sessionToken: null
    };
    this.oktaAuth = new OktaAuth({ url: config.url });
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);    
  }

  async checkAuthentication() {
    const sessionToken = await this.props.auth.getIdToken();
    if (sessionToken) {
      this.setState({ sessionToken });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  handleSchoolChange(e){
    this.setState({school:e.target.value});
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    fetch('/api/users', { 
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    }).then(user => {
      this.oktaAuth.signIn({
        username: this.state.email,
        password: this.state.password
      })
      .then(res => this.setState({
        sessionToken: res.sessionToken
      }));
    })
    .catch(err => console.log);
  }

  render(){
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return null;
    }

    return(
      <div className="bg-light">
      <Container className="py-3">
        <Row>
          <Col xs="12" lg="6" className="py-3">
            <img
              src="http://via.placeholder.com/700x400"
              className="img-fluid"
            />
          </Col>
          <Col xs="12" lg="4" className="py-3">
          <h1>Create an Account</h1>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="school">School</Label>
                <Input
                  type="text"
                  name="school"
                  id="school"
                  placeholder="Harvard University"
                  value={this.state.school} 
                  onChange={this.handleSchoolChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@school.edu"
                  value={this.state.email} 
                  onChange={this.handleEmailChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Unique ID"
                  value={this.state.username} 
                  onChange={this.handleUsernameChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Minimum of 6 characters"
                  value={this.state.password} 
                  onChange={this.handlePasswordChange}
                />
              </FormGroup>
              <FormGroup className="text-center">
              <Button className="btn btn-sm btn-outline-secondary my-2 my-sm-0" type="submit">Sign Up</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    );
  }

});
