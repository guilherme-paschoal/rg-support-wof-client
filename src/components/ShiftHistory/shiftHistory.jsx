import React, { Component } from 'react';
import ShiftHistoryList from './shiftHistoryList';
import ConnectedShiftHistoryFilter from '../../containers/connectedShiftHistoryFilter';

class ShiftHistory extends Component {
  
  render() {
    return(
      <div>
        <ConnectedShiftHistoryFilter />
        <ShiftHistoryList shifts={this.props.shifts.shifts} />
      </div>
    )
  }

}

export default ShiftHistory;