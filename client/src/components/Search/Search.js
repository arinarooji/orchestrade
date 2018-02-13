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

const Search = props => {
  return (
    <div>
      <Jumbotron className="bg-dark text-white jumbotron-fluid mb-0 pb-3">
        <div className="text-center">
          <h1 className="display-4">Browse</h1>
          <p className="lead">Find the instrument you need.</p>
          <hr className="my-2" />
          {/* <p className="lead"> */}
            <ButtonGroup className="btn-group-sm">
              <Button data-value="brass">Brass</Button>
              <Button data-value="keyboard">Keyboard</Button>
              <Button data-value="percussion">Percussion</Button>
              <Button data-value="string">String</Button>
              <Button data-value="woodwind">Woodwind</Button>
            </ButtonGroup>
            <br />
            or
          {/* </p> */}
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

export default Search;
