import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class NavButtons extends Component {

  render() {
    return(
      <Navbar>
        <Nav>
          <NavItem href="/wheel"> Spin The Wheel </NavItem>
          <NavItem href="/shifts"> Shift History </NavItem>
        </Nav>
      </Navbar>
    )
  }

}

export default NavButtons;
