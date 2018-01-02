import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShiftHistoryFilter from './ShiftHistory/shiftHistoryFilter';
import { generateNewURL } from '../utils/urlUtils';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class WofButtons extends Component {

  constructor(props) {
    super(props);
    this._handleShiftFilterChange = this._handleShiftFilterChange.bind(this);
  }

  _handleShiftFilterChange(date) {
    const newURL = generateNewURL("/shifts", { date: date.format("DD/MM/YYYY") });
    this.props.history.push(newURL);
  }

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

export default WofButtons;
