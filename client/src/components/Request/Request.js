import React from 'react';
import { Button, Form, Row, FormGroup, Label, Col, Container, Input, FormText } from 'reactstrap';

export default class Request extends React.Component {
  render() {
    return (
      <div classname="py-3 bg-light">
        <Row>
          <Col align="center">
            <h2 classname="section-heading text-center" >
              Request Form
            </h2>
          </Col>
        </Row>
        <Form>
          <FormGroup>
            <Label for="length"><strong>Select the length you want to borrow Instrument</strong></Label> 
            <Input type="select" name="length" id="length">
              <option>3 Days</option>
              <option>1 Week</option>
              <option>1 Semester</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="email"><strong>Provide an email address to best contact you</strong></Label>
            <Input type="text" name="email" id="email" />
          </FormGroup>          
          <FormGroup>
            <Label for="name"><strong>Provide full name</strong></Label>
            <Input type="text" name="name" id="name" />
          </FormGroup>
          <FormGroup>
            <Label for="instrument"><strong>Name any specific insturment you would like to borrow</strong></Label>
            <Input type="text" id="instrument" placeholder="Instrument" />
          </FormGroup>
          <Button>Request</Button>
        </Form>
      </div>
      
    );
  }
}