import React from 'react';
import { Button, Form, FormGroup, Label, Col, Input, FormText } from 'reactstrap';

export default class Request extends React.Component {
  render() {
    return (
        <Form>
            <FormGroup tag="fieldset" row>
          <legend className="col-form-label col-sm-2">Length you want to borrow Instrument</legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                3 days
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                1 week
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                1 Semester
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        </Form>
    )
  }
}