import React, { Component } from 'react';
// import ShiftItem from './shiftItem';
import ShiftHistoryList from './shiftHistoryList';
import ShiftHistoryFilter from './shiftHistoryFilter';

const R = require("ramda");

class ShiftHistory extends Component {
  constructor(props) {
    super(props);
  
    this.doFilter = this.doFilter.bind(this);
  }
  
  // componentWillMount() {
  //   this.props.getShiftsHistory(this.props.date);
  // }
  
  doFilter(date) {
    this.props.getShiftHistory(date);
  }

  // renderShifts(shift) {
  //   return (<ShiftItem date={shift.date} order={shift.shiftOrder} engineer={shift.engineer.name} key={shift.id}/>);
  // }

  render() {
    return(
      <div>
        <ShiftHistoryFilter doFilter={this.doFilter} />
        <ShiftHistoryList shifts={this.props.shifts.shifts} />
        {/* { !R.isEmpty(this.props.shifts.shifts) && R.map(this.renderShifts, this.props.shifts.shifts)} */}
      </div>
    )
  }

}

export default ShiftHistory;