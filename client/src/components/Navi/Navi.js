import React, {Component} from 'react';
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
   DropdownItem } from 'reactstrap';
 
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
         <Navbar color="faded" light expand="md">
           <NavbarBrand href="/home">Orchestrade</NavbarBrand>
           <NavbarToggler onClick={this.toggle} />
           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
               <NavItem>
                 <NavLink href="/home">Home</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="/browse">Browse</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="/add">Add</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="/manage">Manage</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="/">About</NavLink>
               </NavItem>
             </Nav>
           </Collapse>
         </Navbar>
       </div>
     );
   }
 } 