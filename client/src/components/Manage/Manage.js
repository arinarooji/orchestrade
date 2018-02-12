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

const Manage = props => {
  return (
    <div>
      <Jumbotron className="bg-dark text-white jumbotron-fluid mb-0 pb-3">
        <div className="text-center">
          <h1 className="display-4">Manage</h1>
          <p className="lead">Conduct your instruments.</p>
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
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Manage;
