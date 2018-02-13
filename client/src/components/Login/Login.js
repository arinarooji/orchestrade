
import React, { Component } from "react";
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

export default class Login extends Component {
  constructor(props) {
    super(props);

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
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <div className="container">
            <NavbarBrand href="/home">Orchestrade</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <Form className="form-inline mr-4">
                <div className="form-group">
                <Input className="form-control form-control-sm mr-sm-2" placeholder="Email" />
                </div>
                <div className="form-group">
                <Input className="form-control form-control-sm mr-sm-2" placeholder="Password" />
                </div>
                <Button className="btn btn-sm btn-outline-secondary my-2 my-sm-0">Log in</Button>
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
}
