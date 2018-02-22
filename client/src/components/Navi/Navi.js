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
  DropdownItem
} from "reactstrap";

export default class Navi extends Component {
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
        <Navbar id="mainNav" color="faded" light expand="md">
          <div className="container">
            <NavbarBrand href="/">Orchestrade</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/browse">Browse</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Account
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink href="/add">Add Instruments</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/manage">Manage Instruments</NavLink>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <NavLink href="/settings">Settings</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/#">Log Out</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
