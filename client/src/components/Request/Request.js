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
            <Input type="select" name="select" id="exampleSelect">
              <option>3 Days</option>
              <option>1 Week</option>
              <option>1 Semester</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="length"><strong>Select the type of instrument you are looking to borrow</strong></Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Keys</option>
              <option>String</option>
              <option>Wind</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="Instrument"><strong>Name any specific insturment you would like to borrow</strong></Label>
            <Input type="text" id="instrument" placeholder="Instrument" />
          </FormGroup>
          <Button>Request</Button>
        </Form>
      </div>
      
    );
  }
}