import React, { Component } from "react";
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

const Signup = () => {
  return (
    <div className="bg-light">
      <Container className="py-3">
        <Row>
          <Col xs="12" lg="6" className="py-3">
            <img
              src= "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/G-clef.svg/601px-G-clef.svg.png"
              //"http://via.placeholder.com/700x400"
              className="mx-auto d-block"
              height="500"
            />
          </Col>
          <Col xs="12" lg="4" className="py-3">
          <h1>Create an Account</h1>
            <Form>
              <FormGroup>
                <Label for="school">School</Label>
                <Input
                  type="text"
                  name="school"
                  id="school"
                  placeholder="Harvard University"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@school.edu"
                />
              </FormGroup>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Unique ID"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Minimum of 6 characters"
                />
              </FormGroup>
              <FormGroup className="text-center">
              <Button className="btn btn-sm btn-outline-secondary my-2 my-sm-0" href="/home">               
                Sign Up
              </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
