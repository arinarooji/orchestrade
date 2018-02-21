import React, { Component } from "react";
// import { Link } from 'react-router';
import PropTypes from 'prop-types';
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

const Signup = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
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
            <Form action="/" onSubmit={onSubmit}>
            {/* {errors.summary && <p className="error-message">{errors.summary}</p>} */}
              <FormGroup>
                <Label for="school">School</Label>
                <Input
                  type="text"
                  name="school"
                  id="school"
                  placeholder="Harvard University"
                  errortext={errors.school}
                  onChange={onChange}
                  value={user.school}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@school.edu"
                  errortext={errors.email}
                  onChange={onChange}
                  value={user.email}
                />
              </FormGroup>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Unique ID"
                  errortext={errors.username}
                  onChange={onChange}
                  value={user.username}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Minimum of 6 characters"
                  errortext={errors.password}
                  onChange={onChange}
                  value={user.password}
                />
              </FormGroup>
              <FormGroup className="text-center">
              <Button className="btn btn-sm btn-outline-secondary my-2 my-sm-0" type="submit">               
                Sign Up
              </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );

Signup.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };

export default Signup;
