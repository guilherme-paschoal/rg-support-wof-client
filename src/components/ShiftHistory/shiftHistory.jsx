import React, { Component } from 'react';
import ShiftHistoryList from './shiftHistoryList';
import ConnectedShiftHistoryFilter from '../../containers/connectedShiftHistoryFilter';

const R = require('ramda');

class ShiftHistory extends Component {

  renderList() {

    if (!R.isEmpty(this.props.shifts.shifts)) {
      return (<ShiftHistoryList shifts={this.props.shifts.shifts} />);
    }

    return (<div> Nothing to show </div>)
  }

  render() {
    return (
      <div>
        <ConnectedShiftHistoryFilter />
        {this.renderList()}
      </div>
    )
  }

}

export default ShiftHistory;