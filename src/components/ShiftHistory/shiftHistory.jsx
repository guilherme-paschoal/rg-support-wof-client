import React, { Component } from 'react';
import ShiftHistoryList from './shiftHistoryList';
import ShiftHistoryFilter from './shiftHistoryFilter';

class ShiftHistory extends Component {
  
  render() {
    return(
      <div>
        <ShiftHistoryFilter />
        <ShiftHistoryList shifts={this.props.shifts.shifts} />
      </div>
    )
  }

}

export default ShiftHistory;