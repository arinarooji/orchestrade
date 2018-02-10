import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
} from 'reactstrap';

export default class NavBar extends Component {
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
          { /* begin container */ }
          <div className="container">
            <NavbarBrand href="#">Orchestrade</NavbarBrand>
            <NavbarToggler onClick={ this.toggle } />
            <Collapse isOpen={ this.state.isOpen } navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#">Browse</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Add</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Manage</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
          { /* end container */ }
        </Navbar>
      </div>
      );
  }
}