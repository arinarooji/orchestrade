import React from "react";
import {
  Jumbotron,
  Button,
  ButtonGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Container,
  Col
} from "reactstrap";

const Add = props => {
  return (
    <div>
      <Jumbotron className="bg-dark text-white jumbotron-fluid mb-0 pb-3">
        <div className="text-center">
          <h1 className="display-4">Add Instruments</h1>
          <p className="lead">Help another school by making an unused instrument available!</p>
          <hr className="my-2" />
          <p className="lead">
            <ButtonGroup size="">
              <Button>Brass</Button>
              <Button>Keyboard</Button>
              <Button>Percussion</Button>
              <Button>String</Button>
              <Button>Woodwind</Button>
            </ButtonGroup>
            <br />
            or
          </p>
          <Container>
            <Col xs="12" lg={{ size: "6", offset: "3" }}>
              <InputGroup>
                <Input placeholder="Cello" />
                <InputGroupAddon addonType="append">
                  <Button color="secondary">Search!</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Container>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Add;
