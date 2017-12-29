import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShiftHistoryFilter from './ShiftHistory/shiftHistoryFilter';
import { generateNewURL } from '../utils/urlUtils';

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
      <div>
        <Link to="/wheel"> Spin The Wheel</Link>
        <Link to="/shifts"> Shift History </Link>

        {/* <ShiftHistoryFilter handleShiftFilterChange={this._handleShiftFilterChange}/> */}
      </div>
    )
  }

}

export default WofButtons;
